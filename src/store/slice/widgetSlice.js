import { createSlice } from "@reduxjs/toolkit";
import widgetData from "../../data.json";

const initialState = {
  widget: widgetData.categories,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.widget.push({
        name: action.payload.name,
        widgets: [],
      });
    },
    getWidget : (state,action) =>{
        const categoryName = action.payload
        const category = state.widget.filter((cat) => cat.name == categoryName);
        return category
    },
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.widget.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets.push({
          id: new Date().getTime(), 
          name: widget.name,
          text: widget.text,
        });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.widget.find((cat) => cat.name === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
  },
});

export const { addCategory, addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
