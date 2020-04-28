package com.steverichey.interplanetarycalendar

import android.content.Context
import android.util.AttributeSet
import android.widget.ImageView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout

class PlanetItemView : ConstraintLayout {
    lateinit var textView: TextView
    lateinit var imageView: ImageView
    lateinit var backgroundImageView: ImageView

    constructor(context: Context) : super(context)
    constructor(context: Context, attrs: AttributeSet) : super(context, attrs)

    override fun onFinishInflate() {
        super.onFinishInflate()

        textView = findViewById(R.id.planet_text_view)
        imageView = findViewById(R.id.planet_image_view)
        backgroundImageView = findViewById(R.id.planet_background_view)
    }
}
