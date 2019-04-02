package com.steverichey.pokemonbuilder

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.*
import android.widget.ArrayAdapter

class MainActivity : AppCompatActivity() {
    val pokemonList = arrayListOf<Pokemon>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val seekText: TextView = findViewById(R.id.seekText)
        val seekBar: SeekBar = findViewById(R.id.seekBar)
        seekBar.setOnSeekBarChangeListener(object: SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(seekBar: SeekBar?, progress: Int, fromUser: Boolean) {
                seekText.text = progress.toString()
            }

            override fun onStartTrackingTouch(seekBar: SeekBar?) {}
            override fun onStopTrackingTouch(seekBar: SeekBar?) {}
        })

        val editText: EditText = findViewById(R.id.editText)

        val spinner: Spinner = findViewById(R.id.spinner)
        spinner.adapter = ArrayAdapter<PokemonType>(this, android.R.layout.simple_spinner_item, PokemonType.values())

        val countText: TextView = findViewById(R.id.numberOfThingsView)

        // klsajflkasdjfklasjdfklasdjf
        val addButton: Button = findViewById(R.id.addButton)
        addButton.setOnClickListener {
            val index = seekBar.progress
            val name = editText.text.toString()
            val type = spinner.selectedItem as PokemonType
            val pokemon = Pokemon(index, name, type)
            pokemonList.add(pokemon)

            countText.text = getString(R.string.number_of_pokemon, pokemonList.size)
        }

        val viewButton: Button = findViewById(R.id.viewButton)
        viewButton.setOnClickListener {
            val intent = Intent(this, PokedexActivity::class.java)
            intent.putParcelableArrayListExtra("pokedex", pokemonList)
            startActivity(intent)
        }
    }
}
