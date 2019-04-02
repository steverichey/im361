package com.steverichey.pokemonbuilder

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions

class ScenicActivity : AppCompatActivity(), OnMapReadyCallback {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_scenic)

        if (GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(this) == ConnectionResult.SUCCESS) {
            val mapFragment = supportFragmentManager.findFragmentById(R.id.my_map_view) as SupportMapFragment
            mapFragment.getMapAsync(this)
        }
    }

    override fun onMapReady(map: GoogleMap?) {
        map?.let {
            LatLng(40.6091693, -89.5392298).let { lat ->
                it.addMarker(MarkerOptions().position(lat).title(getString(R.string.pumpkin_capital)))
                it.moveCamera(CameraUpdateFactory.newLatLng(lat))
                it.animateCamera(CameraUpdateFactory.newLatLng(lat))
            }
        }
    }
}
