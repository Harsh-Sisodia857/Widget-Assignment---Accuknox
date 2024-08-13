import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget } from "../store/slice/widgetSlice";
import ToggleCheckbox from "./ToggleCheckbox";

function LeftModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedTab, setSelectedTab] = useState("");
  const [selectedWidget, setSelectedWidget] = useState([]);
  const [CategoryWidget, setCategoryWidget] = useState([]);
  const { widget } = useSelector((state) => state.widget);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && widget.length > 0) {
      const firstCategory = widget[0];
      setSelectedTab(firstCategory.name);
      setCategoryWidget(firstCategory.widgets);
    }
  }, [isOpen, widget]);


  const handleTabChange = (text) => {
    const categorySelected = widget.find((wt) => wt.name === text);
    const widgetOfSelectedCategory = categorySelected.widgets;
    setCategoryWidget(widgetOfSelectedCategory);
    if (categorySelected) {
      setSelectedTab(categorySelected.name);
      setSelectedWidget(null);
    }
  };

  const handleSelectWidget = (wid) => {
    setSelectedWidget((prev) => {
      if (Array.isArray(prev)) {
        return [...prev, wid];
      } else {
        return [wid];
      }
    });
  };

  const handleConfirm = () => {
    selectedWidget.forEach((widgetId) => deleteWidget(widgetId));
    onClose();
  };

  const deleteWidget = (widgetId) => {
    console.log(selectedTab, widgetId)
    dispatch(removeWidget({ categoryId: selectedTab, widgetId: widgetId }));
  };

  return (
    <div className="fixed right-0 top-0 h-full w-[40%] bg-white shadow-lg z-50 flex flex-col p-4">
      <div className="flex">
        {widget.map((wid) => (
          <Button
            key={wid.name}
            text={wid.name}
            selectedTab = {selectedTab}
            handleClick={handleTabChange}
          />
        ))}
      </div>

      <div className="flex flex-col my-3 mx-4 p-3">
        {CategoryWidget.map((wid) => (
          <div key={wid.id} className="flex items-baseline space-y-2 mt-4">
            <ToggleCheckbox onClick={() => handleSelectWidget(wid.id)} />
            <div
              className={`ml-2 ${
                selectedWidget?.id === wid.id
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {wid.name}
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex justify-end mt-4 fixed bottom-0 right-0"
        style={{ margin: "10px 30px" }}
      >
        <button
          onClick={handleConfirm}
          className="bg-green-500 text-white hover:bg-green-600 p-2 rounded mr-2"
        >
          Confirm
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white hover:bg-red-600 p-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LeftModal;
