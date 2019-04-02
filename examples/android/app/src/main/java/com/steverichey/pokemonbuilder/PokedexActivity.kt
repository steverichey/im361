package com.steverichey.pokemonbuilder

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView

class PokedexActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pokedex)

        val pokemonList = intent.getParcelableArrayListExtra<Pokemon>("pokedex")
        val recyclerView: RecyclerView = findViewById(R.id.my_recycler_view)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = PokedexRecyclerAdapter(this, pokemonList.toTypedArray())
    }

    override fun onDestroy() {
        super.onDestroy()


    }
}
