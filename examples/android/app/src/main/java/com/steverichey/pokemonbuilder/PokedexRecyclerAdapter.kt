package com.steverichey.pokemonbuilder

import android.content.Context
import android.support.v7.widget.RecyclerView
import android.view.ViewGroup
import android.widget.TextView

class PokedexRecyclerAdapter(val context: Context, val pokedex: Array<Pokemon>): RecyclerView.Adapter<PokedexViewHolder>() {
    override fun onCreateViewHolder(group: ViewGroup, index: Int): PokedexViewHolder {
        val textView = TextView(context)
        return PokedexViewHolder(textView)
    }

    override fun onBindViewHolder(holder: PokedexViewHolder, index: Int) {
        holder.textView.text = "Pokemon: ${pokedex[index]}"
    }

    override fun getItemCount(): Int {
        return pokedex.size
    }
}
