#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "BIN";
const char* password = "bin12345";

WebServer server(80);

// Pins
#define TRIG 5
#define ECHO 18
#define GAS_PIN 34

// Thresholds
#define GAS_THRESHOLD 500
#define HARMFUL_THRESHOLD 1000

// Function to measure distance (averaged)
long getDistance() {
  long total = 0;

  for (int i = 0; i < 5; i++) {
    digitalWrite(TRIG, LOW);
    delayMicroseconds(2);

    digitalWrite(TRIG, HIGH);
    delayMicroseconds(10);

    digitalWrite(TRIG, LOW);

    long duration = pulseIn(ECHO, HIGH);
    long distance = duration * 0.034 / 2;

    total += distance;
    delay(10);
  }

  return total / 5;
}

void handleRoot() {

  // Smooth gas reading
  int gas = 0;

  for (int i = 0; i < 5; i++) {
    gas += analogRead(GAS_PIN);
    delay(5);
  }

  gas /= 5;

  long distance = getDistance();

  // Clamp distance (0–15 cm)
  if (distance > 15) distance = 15;
  if (distance < 0) distance = 0;

  // Convert distance to percentage
  int level = ((15 - distance) * 100) / 15;

  // Clamp level
  if (level < 0) level = 0;
  if (level > 100) level = 100;

  // Odor status logic
  String smellStatus;
  String smellClass;

  if (gas > HARMFUL_THRESHOLD) {
    smellStatus = "Harmful Gases";
    smellClass = "bad";
  }
  else if (gas > GAS_THRESHOLD) {
    smellStatus = "Bad Odor";
    smellClass = "bad";
  }
  else {
    smellStatus = "Fresh";
    smellClass = "good";
  }

  // Bin level color
  String levelColor;

  if (level < 40) {
    levelColor = "#2ecc71"; // Green
  }
  else if (level < 80) {
    levelColor = "#f1c40f"; // Yellow
  }
  else {
    levelColor = "#e74c3c"; // Red
  }

  // HTML Page
  String html = "<!DOCTYPE html><html><head>";

  html += "<meta name='viewport' content='width=device-width, initial-scale=1'>";
  html += "<meta http-equiv='refresh' content='3'>";

  html += "<style>";

  html += "body{";
  html += "font-family:Arial;";
  html += "text-align:center;";
  html += "background:#f4f4f4;";
  html += "margin:0;";
  html += "padding:20px;";
  html += "}";

  html += "h1{color:#333;}";

  html += ".card{";
  html += "background:#fff;";
  html += "padding:20px;";
  html += "margin:20px auto;";
  html += "width:280px;";
  html += "border-radius:12px;";
  html += "box-shadow:0 4px 10px rgba(0,0,0,0.1);";
  html += "}";

  html += ".bin{";
  html += "width:90px;";
  html += "height:140px;";
  html += "border:3px solid #333;";
  html += "margin:auto;";
  html += "position:relative;";
  html += "background:#eee;";
  html += "overflow:hidden;";
  html += "border-radius:10px;";
  html += "}";

  html += ".fill{";
  html += "position:absolute;";
  html += "bottom:0;";
  html += "width:100%;";
  html += "background:" + levelColor + ";";
  html += "height:" + String(level) + "%;";
  html += "transition:0.5s;";
  html += "}";

  html += ".bad{";
  html += "color:red;";
  html += "font-weight:bold;";
  html += "}";

  html += ".good{";
  html += "color:green;";
  html += "font-weight:bold;";
  html += "}";

  html += "</style></head><body>";

  html += "<h1>Smart Bin Monitor</h1>";

  // Bin Level Card
  html += "<div class='card'>";
  html += "<h3>Bin Level</h3>";
  html += "<div class='bin'><div class='fill'></div></div>";
  html += "<p><b>" + String(level) + "% Full</b></p>";
  html += "<p>Distance: " + String(distance) + " cm</p>";
  html += "</div>";

  // Odor Status Card
  html += "<div class='card'>";
  html += "<h3>Odor Status</h3>";
  html += "<p class='" + smellClass + "'>" + smellStatus + "</p>";
  html += "<p>Gas Value: " + String(gas) + "</p>";
  html += "</div>";

  html += "</body></html>";

  server.send(200, "text/html", html);
}

void setup() {

  Serial.begin(115200);

  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  WiFi.begin(ssid, password);

  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);

  server.begin();
}

void loop() {
  server.handleClient();
}