package com.steverichey.pokemonbuilder

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Pokemon(val number: Int, val name: String, val type: PokemonType) : Parcelable
