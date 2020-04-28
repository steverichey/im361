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
import kotlinx.android.synthetic.main.fragment_current_planet.view.*

class PlanetListFragment : Fragment() {
    lateinit var recyclerView: RecyclerView
    lateinit var recycler: GeneralRecycler<*, *>

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_planet_list, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // connect to our floating action button
        val floatingActionButton = view.findViewById<FloatingActionButton>(R.id.floating_action_button)

        // this is the list of data to show in the recycler at app launch
        val planets = mutableListOf(
            Planet("Mercury", R.drawable.ic_noun_mercury_287717, R.drawable.mercury_bg),
            Planet("Venus", R.drawable.ic_noun_venus_287715, R.drawable.venus_bg),
            Planet("Earth", R.drawable.ic_noun_earth_287725, R.drawable.earth_bg)
        )

        // set an action to occur when the user taps on the floating action button
        floatingActionButton.setOnClickListener {
            // create a new dialog/popup/alert
            val dialog = PlanetEntryDialogFragment()

            // when the user taps OK...
            dialog.positiveCallback = { text ->
                if (text.isNotEmpty()) {
                    // create a short toast
                    Toast.makeText(context, "Added new planet $text", Toast.LENGTH_SHORT).show()

                    // add the new planet to our list of planets; this will update the recycler view
                    if (text == "Mars") {
                        planets.add(Planet(text, R.drawable.ic_noun_mars_287716, R.drawable.mars_bg))
                    } else {
                        planets.add(Planet(text, R.drawable.ic_error_outline_black_24dp, R.drawable.other_bg))
                    }
                }
            }

            // actually show the dialog to the user
            dialog.show(fragmentManager!!, "add_planet")
        }

        // connect to our recycler view
        recyclerView = view.findViewById(R.id.recycler_view)

        // create a new object to manage the recycler view
        // if you use this in your code:
        // 1. replace `PlanetItemView` with the name of your view for each item in the recycler
        // 2. replace `Planet` with the name of your data class for each item
        // 3. replace `R.layout.view_planet_item` with the resource ID of your layout for each item
        // 4. replace `planets` with the name of your mutable list of data
        recycler = GeneralRecycler<PlanetItemView, Planet>(
            context!!, recyclerView, R.layout.view_planet_item, planets) { itemView, item ->
            // 5. replace these two lines below to set up your view
            itemView.textView.text = item.name
            itemView.imageView.setImageResource(item.iconResource)
            itemView.backgroundImageView.setImageResource(item.backgroundResource)
        }
    }

    // if you use the general recycler, you will need to create your own data class to show in the recycler
    data class Planet(val name: String, val iconResource: Int, val backgroundResource: Int)
}
