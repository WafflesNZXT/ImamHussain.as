#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os

PORT = 5000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    os.chdir('.')
    
    with socketserver.TCPServer(("0.0.0.0", PORT), MyHandler) as httpd:
        print(f"Serving Imam Hussain Memorial Website at http://0.0.0.0:{PORT}")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    start_server()