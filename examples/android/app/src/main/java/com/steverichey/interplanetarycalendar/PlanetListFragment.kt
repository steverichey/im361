package com.steverichey.interplanetarycalendar

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton

class PlanetListFragment : Fragment() {
    lateinit var recyclerView: RecyclerView
    lateinit var viewAdapter: RecyclerView.Adapter<*>
    lateinit var viewManager: RecyclerView.LayoutManager

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_planet_list, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val floatingActionButton = view.findViewById<FloatingActionButton>(R.id.floating_action_button)

        floatingActionButton.setOnClickListener {
            val dialog = PlanetEntryDialogFragment()

            dialog.positiveCallback = { text ->
                Toast.makeText(context, "You entered $text!", Toast.LENGTH_SHORT).show()
            }

            dialog.show(fragmentManager!!, "add_planet")
        }

        val planets = mutableListOf(
            Planet("Mercury"),
            Planet("Venus"),
            Planet("Earth")
        )

        recyclerView = view.findViewById(R.id.recycler_view)
        viewManager = LinearLayoutManager(context)
        viewAdapter = PlanetListAdapter(planets)
    }

    data class Planet(val name: String)

    inner class PlanetListViewHolder(val view: PlanetItemView) : RecyclerView.ViewHolder(view)

    inner class PlanetListAdapter(val data: List<Planet>) : RecyclerView.Adapter<PlanetListViewHolder>() {
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PlanetListViewHolder {
            val view = LayoutInflater.from(parent.context)
                .inflate(R.layout.view_planet_item, parent, false) as PlanetItemView
            return PlanetListViewHolder(view)
        }

        override fun getItemCount(): Int {
            return data.size
        }

        override fun onBindViewHolder(holder: PlanetListViewHolder, position: Int) {
            holder.view.textView.text = data[position].name
            holder.view.imageView.setImageResource(R.drawable.ic_my_location_black_24dp)
        }
    }
}
