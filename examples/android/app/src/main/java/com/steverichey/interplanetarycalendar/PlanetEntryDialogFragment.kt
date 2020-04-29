package com.steverichey.interplanetarycalendar

import android.annotation.SuppressLint
import androidx.appcompat.app.AlertDialog
import android.app.Dialog
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.EditText
import android.widget.LinearLayout
import androidx.fragment.app.DialogFragment

class PlanetEntryDialogFragment : DialogFragment() {
    var positiveCallback: ((String) -> Unit)? = null

    @SuppressLint("InflateParams")
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val builder = AlertDialog.Builder(context!!, R.style.DialogFragmentTheme)
        builder.setMessage("Add a new planet?")

        val dialogView = LayoutInflater
            .from(context)
            .inflate(R.layout.dialog_planet_entry, null) as LinearLayout
        builder.setView(dialogView)

        builder.setPositiveButton("Okay") { _, _ ->
            val entry = dialogView.findViewById<EditText>(R.id.editText)
            positiveCallback?.invoke(entry.text.toString())
        }

        builder.setNegativeButton("Cancel") { _, _ -> }

        return builder.create()
    }
}
