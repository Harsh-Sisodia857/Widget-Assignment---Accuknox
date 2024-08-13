import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addWidget } from "../store/slice/widgetSlice";
import Card from "./Card";
import Modal from "./Modal"; 
import LeftModal from "./LeftModal";

function Main() {
  const dispatch = useDispatch();
  const { widget: widgetData } = useSelector((state) => state.widget);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leftModalOpen, setLeftModalOpen] = useState(false);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [widgetCategory, setWidgetCategory] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const openLeftModal = () => {
    setLeftModalOpen(true);
  };

  const closeLeftModal = () => {
    setLeftModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWidgetName("");
    setWidgetText("");
    setWidgetCategory("");
    setIsEditable(true);
  };

  const openAddWidgetModal = (categoryName) => {
    setWidgetCategory(categoryName);
    setIsModalOpen(true);
    setIsEditable(false);
  };

  const saveWidget = () => {
    console.log("Widget Name:", widgetName);
    console.log("Widget Text:", widgetText);
    console.log("Widget Category:", widgetCategory);
    const existingCategory = widgetData.find(
      (category) => category.name === widgetCategory
    );
    if (existingCategory) {
      console.log(existingCategory);
      dispatch(
        addWidget({
          categoryName: existingCategory.name,
          widget: { name: widgetName, text: widgetText },
        })
      );
    } else {
      dispatch(addCategory({ name: widgetCategory }));
      dispatch(
        addWidget({
          categoryName: widgetCategory,
          widget: { name: widgetName, text: widgetText },
        })
      );
    }
    closeModal();
  };

  return (
    <div className="mb-10">
      <div className="p-6 flex items-center justify-between w-[70%] mx-auto">
        <h1 className="text-xl font-bold mb-4">CNAPP DASHBOARD</h1>
        <button
          onClick={openLeftModal}
          className="bg-blue-500 text-white hover:bg-blue-600 p-2 rounded"
        >
          + Add Category
        </button>
        <LeftModal isOpen={leftModalOpen} onClose={closeLeftModal}/>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={saveWidget}
          title="Add Widget"
        >
          <input
            id="widget-category"
            type="text"
            placeholder="Widget Category"
            className="border border-gray-300 p-2 mb-4 w-full rounded"
            value={widgetCategory}
            readOnly={!isEditable}
            onChange={(e) => setWidgetCategory(e.target.value)}
          />
          <input
            id="widget-name"
            type="text"
            placeholder="Widget Name"
            className="border border-gray-300 p-2 mb-4 w-full rounded"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <textarea
            id="widget-text"
            placeholder="Widget Text"
            className="border border-gray-300 p-2 mb-4 w-full rounded"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
          ></textarea>
        </Modal>
      </div>
      <div className="space-y-4 mx-8">
        {widgetData.map((widget, index) => (
          <Card
            key={index}
            category={widget.name}
            widget={widget.widgets}
            openAddWidgetModal={openAddWidgetModal}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
