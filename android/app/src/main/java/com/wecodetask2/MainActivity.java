package com.wecodetask2;
// react-native-splash-screen 
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle; 
import org.devio.rn.splashscreen.SplashScreen;
import com.cboy.rn.splashscreen.SplashScreen;
// react-native-splash-screen 
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  // react-native-splash-screen 
  @Override 
  protected void onCreate(Bundle savedInstanceState) {
SplashScreen.show(this, R.style.SplashScreenTheme);     SplashScreen.show(this); 
     super.onCreate(savedInstanceState);
SplashScreen.show(this, R.style.SplashScreenTheme);  // react-native-splash-screen 

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "wecodeTask2";
  }
}
