package com.steverichey.interplanetarycalendar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    // https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    function fibonacci(num){
        var a = 1, b = 0, temp;

        while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    }
}
