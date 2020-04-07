package com.steverichey.interplanetarycalendar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val initialValue = 24
        val finalValue = fibonacci(initialValue)

        val textView = findViewById<TextView>(R.id.text_view)
        textView.text = "The fibonacci number at index $initialValue is $finalValue"
    }

    // https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    fun fibonacci(num: Int): Int {
        var copyOfNum = num
        var a = 1
        var b = 0
        var temp: Int

        while (copyOfNum >= 0) {
            temp = a
            a += b
            b = temp
            copyOfNum--
        }

        return b
    }
}
