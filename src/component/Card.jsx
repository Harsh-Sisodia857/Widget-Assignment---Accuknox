import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget,deleteCategory } from "../store/slice/widgetSlice";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from 'react-toastify';

function Card({ category, widget, openAddWidgetModal }) {
  const dispatch = useDispatch();
  const handleDelete = (categoryId, widgetId) => {
    console.log(categoryId, widgetId)
    dispatch(removeWidget({ categoryId, widgetId }));
    toast("Widget Deleted Successfully !!")
  };

  const handleDeleteCategory = (categoryName) =>{
    dispatch(deleteCategory({categoryName : categoryName}))
    toast("Category Deleted Successfully !!")
  }

  return (
    <div className="mb-6">
      <h1 className="text-xl font-semibold mb-4">
        <div className="flex items-baseline justify-start">
          <div>{category}</div>
          <div className="pt-2 ml-3 text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDeleteCategory(category)}><AiOutlineClose size={20} /></div>
        </div>
         
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {widget.map((wid) => (
          <div key={wid.id} className="bg-gray-100 p-4 rounded-lg shadow-md relative">
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={() => handleDelete(category, wid.id)}
            >
              <AiOutlineClose size={20} />
            </button>
            <h2 className="text-lg font-medium">{wid.name}</h2>
            <p className="text-sm text-gray-600">{wid.text}</p>
          </div>
        ))}
        <div className="flex items-center p-4 justify-center bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => openAddWidgetModal(category)}
          >
            + Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
