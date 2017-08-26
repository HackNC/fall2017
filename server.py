from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def root():
    if request.method == "GET":
        return render_template('index.html')

    email = request.form['email']
    f = open('email_list', 'a')
    f.write(email + ",\n")
    f.close()
    return render_template('index.html', msg="Thank you for your interest in HackNC, we'll follow up with more information soon!")

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 8000, debug = True)