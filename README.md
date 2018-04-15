# ServiceStack
A simple web service that allows one to interact with two web-browsers,f viz., Google Chrome and Mozilla Firefox.

# Description
You have to implement a simple web service that allows one to interact with two web-browsers,f viz., Google Chrome and Mozilla Firefox.

The interaction has three components:

- Start: Starting a web-browser process with a given URL.
- Stop: Killing the web-browser process
- Cleanup: Delete all the browsing session information such as history, cache, cookies, downloads, saved passwords, etc.
- Get URL: Get the current active tab URL. Assume it has exactly one window and one tab open for the browser instance. 
- Using Selenium to solve this problem is not allowed.

Your web service should accept commands in the form of restful URLs i.e.,

- http://<server>/start?browser=chrome&url=http://example.com should start Google Chrome and open http://example.com in the same. Similarly for Firefox.
- http://<server>/geturl?browser=<browser> should get the current active tab URL for the given browser
- http://<server>/stop?browser=<browser> should stop the given browser if it is running
- http://<server>/cleanup?browser=<browser> should clean up the browsing session for the given browser if has been stopped.
