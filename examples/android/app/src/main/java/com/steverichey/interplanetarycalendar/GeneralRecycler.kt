package com.steverichey.interplanetarycalendar

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

/**
 * A class to manage the connection between a linear recycler view and data.
 * @param context: The current application context.
 * @param recyclerView: The recycler view to manage.
 * @param itemLayout: The resource ID of the layout for each item in the recycler view.
 * @param data: A mutable list of data to present in the recycler view.
 * @param onViewBind: An anonymous function to call when a new view is being prepared.
 */
class GeneralRecycler<TView: View, TItem>(
    context: Context,
    recyclerView: RecyclerView,
    itemLayout: Int,
    data: List<TItem>,
    private val onViewBind: (view: TView, item: TItem) -> Unit
) {
    init {
        // this sets up the connection between the recycler view, an adapter, and a layout manager
        recyclerView.layoutManager = LinearLayoutManager(context)
        recyclerView.adapter = GeneralListAdapter<TView, TItem>(data, this, itemLayout)
    }

    /**
     * An internal function to send data from the adapter back to the `onViewBind` function.
     * You should not need to call this in your code.
     * @param view: The Android view which will be shown in the recycler view.
     * @param item: A single point of data in the mutable list.
     */
    private fun bind(view: View, item: Any?) {
        // this is technically an unchecked cast; but we know the types we expect here
        @Suppress("UNCHECKED_CAST")
        onViewBind.invoke(view as TView, item as TItem)
    }

    /**
     * A recycler view adapter that works with a list of data and some specific per-item layout resource.
     * You should not need to construct this in your code.
     * @param data: The list of data to present.
     * @param recycler: The container of this adapter.
     * @param layout: The resource ID of the layout file for each item.
     */
    private class GeneralListAdapter<TView: View, TItem>(
        private val data: List<TItem>,
        private val recycler: GeneralRecycler<*, *>,
        private val layout: Int
    ) : RecyclerView.Adapter<GeneralListViewHolder<TView>>() {
        /**
         * Called by the Android runtime to create a new view and holder when the recycler needs it.
         * You should not need to call this in your code.
         */
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): GeneralListViewHolder<TView> {
            // another unchecked cast here; but if TView isn't the right type, there is a major error
            @Suppress("UNCHECKED_CAST")
            val view = LayoutInflater.from(parent.context)
                .inflate(layout, parent, false) as TView

            return GeneralListViewHolder(view)
        }

        /**
         * The recycler view's size is dictated solely by the size of the list of data it contains.
         * You should not need to call this in your code.
         * @return The number of items in the data list.
         */
        override fun getItemCount(): Int {
            return data.size
        }

        /**
         * The Android runtime calls this when a new view is ready for the recycler.
         * We simply pass this call back to the GeneralRecycler, which passes it to the anonymous constructor method.
         * You should not need to call this in your code.
         * @param holder: The view holder that contains the view to bind.
         * @param position: The position in the data list that corresponds to this view.
         */
        override fun onBindViewHolder(holder: GeneralListViewHolder<TView>, position: Int) {
            // we call the GeneralRecycler here with the view and specific data
            // this allows your code to update the view with information from this data
            recycler.bind(holder.view , data[position])
        }
    }

    /**
     * A class that simply holds a reference to one view in the recycler view.
     * You should not need to construct this in your code.
     * @param view: The view to contain in a holder.
     */
    class GeneralListViewHolder<TView: View>(val view: TView) : RecyclerView.ViewHolder(view)
}
