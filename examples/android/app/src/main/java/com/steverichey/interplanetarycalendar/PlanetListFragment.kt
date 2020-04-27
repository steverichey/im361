package com.steverichey.interplanetarycalendar

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.google.android.material.floatingactionbutton.FloatingActionButton

class PlanetListFragment : Fragment() {
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
    }
}
