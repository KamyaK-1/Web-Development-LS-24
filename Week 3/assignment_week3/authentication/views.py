from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
# Create your views here.
def home(request):
    return render(request,"index.html")
def signup(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        re_password = request.POST["confirm_password"]
        dob = request.POST["date_of_birth"]

        if User.objects.filter(username=username):
            messages.error(request,"Username already exists!")
            return redirect("home")
        if User.objects.filter(email=email):
            messages.error(request,"Email address already in use")
            return redirect("home")
        if password != re_password:
            messages.error(request,"Passwords do not match!")
            return redirect("home")
        if not username.isalnum():
            messages.error(request,"Username should only contain letters and numbers")
            return redirect("home")
        myUser = User.objects.create_user(username,email,password)
        myUser.date_of_birth = dob

        myUser.save()
        messages.success(request,"Your account has been created successfully!!!")
        return redirect("signin")

    return render(request,"signup.html")
def signin(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(username=username,password=password)

        if user is None:
            messages.error(request,"Invalid Credentials!")
            return redirect("home")
        else:
            login(request,user)
            return render(request,"index.html",{"user":user})
    return render(request,"signin.html")
def signout(request):
    logout(request)
    messages.success(request,"Logged out successfully")
    return redirect("home")