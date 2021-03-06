package com.awesomeproject;

import com.facebook.react.ReactActivity;
import android.os.Bundle;  //add 
import org.devio.rn.splashscreen.SplashScreen; 

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //2-args 是否全屏  boolean
        // SplashScreen.show(this);
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }

}
