package com.steverichey.interplanetarycalendar

import android.graphics.PorterDuff
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator

class MainActivity : AppCompatActivity() {
    private lateinit var viewPager: ViewPager2

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        viewPager = findViewById(R.id.view_pager)

        val adapter = MainActivityPagerAdapter(this)
        viewPager.adapter = adapter

        val tabLayout = findViewById<TabLayout>(R.id.tab_layout)
        val primaryColor = ContextCompat.getColor(this, R.color.colorPrimary)

        TabLayoutMediator(tabLayout, viewPager) { tab, position ->
            if (position == 0) {
                tab.text = getString(R.string.tab_planets)
                tab.setIcon(R.drawable.ic_list_black_24dp)
            }

            if (position == 1) {
                tab.text = getString(R.string.tab_current)
                tab.setIcon(R.drawable.ic_my_location_black_24dp)
            }

            if (position == 2) {
                tab.text = getString(R.string.tab_settings)
                tab.setIcon(R.drawable.ic_settings_black_24dp)
            }

            @Suppress("DEPRECATION")
            tab.icon?.setColorFilter(primaryColor, PorterDuff.Mode.SRC_ATOP)
        }.attach()
    }

    override fun onBackPressed() {
        if (viewPager.currentItem > 0) {
            viewPager.currentItem -= 1
        } else {
            super.onBackPressed()
        }
    }

    private inner class MainActivityPagerAdapter(activity: FragmentActivity) : FragmentStateAdapter(activity) {
        override fun getItemCount(): Int {
            return 3
        }

        override fun createFragment(position: Int): Fragment {
            if (position == 0) {
                return PlanetListFragment()
            }

            if (position == 1) {
                return CurrentPlanetFragment()
            }

            return SettingsFragment()
        }
    }
}
