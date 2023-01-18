# README.md

https://stackoverflow.com/questions/21540948/android-studio-doesnt-recognize-the-running-emulator

```
adb kill-server
adb start-server
```

https://stackoverflow.com/questions/58024881/react-native-serving-uri-from-localhost-not-rendering-the-image

## Start Emulator

```
cd C:\Users\cdbre\AppData\Local\Android\Sdk\emulator
.\emulator.exe -avd "Pixel_6_API_31"
```

## Set Up WSL2

https://gist.github.com/jjvillavicencio/18feb09f0e93e017a861678bc638dcb0

```bash
# Install unzip and get Android SDK tools
cd /home/<user>/
sudo apt-get install unzip
wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip sdk-tools-linux-4333796.zip -d Android
rm sdk-tools-linux-4333796.zip

# Install JAVA
sudo apt-get install -y lib32z1 openjdk-8-jdk
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
printf "\n\nexport JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64\nexport PATH=\$PATH:\$JAVA_HOME/bin" >> ~/.bashrc

# Android
cd Android/tools/bin
./sdkmanager "platform-tools" "platforms;android-26" "build-tools;26.0.3"
export ANDROID_HOME=/home/<user>/Android
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
printf "\n\nexport ANDROID_HOME=/home/<user>/Android\nexport PATH=\$PATH:\$ANDROID_HOME/tools\nexport PATH=\$PATH:\$ANDROID_HOME/platform-tools" >> ~/.bashrc
android update sdk --no-ui
sudo apt-get install gradle
gradle -v
adb start-server
```