package com.capacitor.remix.app;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        long time = System.currentTimeMillis();
        Log.d("MainActivity", "[PERFORMANCE] onCreate time: " + time);
    }
}
