BUILD: docker build -t myapp:latest .
RUN: docker run --name izac -p 8080:8080 myapp:latest
URL: http://localhost:8080/?name=yourname

replace yourname with your name!
