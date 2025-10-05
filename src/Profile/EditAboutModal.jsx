import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const EditAboutModal = () => {
  const [activeModal, setActiveModal] = useState(null); // 'work', 'education', 'places'
  const [editingItem, setEditingItem] = useState(null); // track item being edited
  const [formData, setFormData] = useState({ company: "", position: "", description: "", college: "", subject: "", hometown: "" });

  const [workData, setWorkData] = useState([{ id: 1, company: "Jvil", position: "Developer", description: "Working as a software developer" }]);
  const [educationData, setEducationData] = useState([{ id: 1, college: "College", subject: "Computer Science", description: "Studied computer science" }]);
  const [placesData, setPlacesData] = useState([{ id: 1, place: "Bangladesh", type: "Country" }]);

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  // Open modal for editing or adding
  const openModal = (type, item = null) => {
    if (item) { // editing
      setEditingItem({ type, id: item.id });
      if (type === "work") setFormData({ company: item.company, position: item.position, description: item.description || "", college: "", subject: "", hometown: "" });
      else if (type === "education") setFormData({ company: "", position: "", description: item.description || "", college: item.college, subject: item.subject, hometown: "" });
      else if (type === "places") setFormData({ company: "", position: "", description: "", college: "", subject: "", hometown: item.place });
    } else { // adding
      setEditingItem(null);
      setFormData({ company: "", position: "", description: "", college: "", subject: "", hometown: "" });
    }
    setActiveModal(type);
  };

  const closeModal = () => setActiveModal(null);

  const handleSaveOrAdd = () => {
    if (editingItem) {
      // Save changes
      const { type, id } = editingItem;
      if (type === "work") setWorkData(prev => prev.map(w => w.id === id ? { id, ...formData } : w));
      else if (type === "education") setEducationData(prev => prev.map(e => e.id === id ? { id, ...formData } : e));
      else if (type === "places") setPlacesData(prev => prev.map(p => p.id === id ? { id, place: formData.hometown, type: "Hometown" } : p));
      console.log("Saved item:", formData);
    } else {
      // Add new
      const id = Date.now();
      if (activeModal === "work") setWorkData(prev => [...prev, { id, ...formData }]);
      else if (activeModal === "education") setEducationData(prev => [...prev, { id, ...formData }]);
      else if (activeModal === "places") setPlacesData(prev => [...prev, { id, place: formData.hometown, type: "Hometown" }]);
      console.log("Added item:", formData);
    }
    closeModal();
  };

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <div className="min-w-lg bg-white shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Edit</h2>

        {/* Work Section */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            <h3 className="text-lg font-medium">Work</h3>
            <button onClick={() => openModal("work")} className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              <span className="mr-1">+</span> Add
            </button>
          </div>
          {workData.map(w => (
            <div key={w.id} className="flex justify-between py-2 px-3 bg-gray-50 rounded mb-2">
              <span>Works at {w.company}</span>
              <div className="flex space-x-2">
                <button onClick={() => openModal("work", w)} className="text-blue-500 hover:text-blue-600 text-sm">Edit</button>
                <button onClick={() => setWorkData(prev => prev.filter(x => x.id !== w.id))} className="text-red-500 hover:text-red-600 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            <h3 className="text-lg font-medium">College</h3>
            <button onClick={() => openModal("education")} className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              <span className="mr-1">+</span> Add
            </button>
          </div>
          {educationData.map(e => (
            <div key={e.id} className="flex justify-between py-2 px-3 bg-gray-50 rounded mb-2">
              <span>Studied at {e.college}</span>
              <div className="flex space-x-2">
                <button onClick={() => openModal("education", e)} className="text-blue-500 hover:text-blue-600 text-sm">Edit</button>
                <button onClick={() => setEducationData(prev => prev.filter(x => x.id !== e.id))} className="text-red-500 hover:text-red-600 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Places Section */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            <h3 className="text-lg font-medium">Places Lived</h3>
            <button onClick={() => openModal("places")} className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              <span className="mr-1">+</span> Add
            </button>
          </div>
          {placesData.map(p => (
            <div key={p.id} className="flex justify-between py-2 px-3 bg-gray-50 rounded mb-2">
              <span>{p.place}</span>
              <div className="flex space-x-2">
                <button onClick={() => openModal("places", p)} className="text-blue-500 hover:text-blue-600 text-sm">Edit</button>
                <button onClick={() => setPlacesData(prev => prev.filter(x => x.id !== p.id))} className="text-red-500 hover:text-red-600 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal (always mounted, only hidden if not active) */}
      {activeModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30" onClick={closeModal}>
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-lg overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">{editingItem ? "Edit" : "Add"} {activeModal}</h3>

            {activeModal === "work" && (
              <>
                <input type="text" placeholder="Company" value={formData.company} onChange={e => handleInputChange("company", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" />
                <input type="text" placeholder="Position" value={formData.position} onChange={e => handleInputChange("position", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" />
                <textarea placeholder="Description" value={formData.description} onChange={e => handleInputChange("description", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" rows={3} />
              </>
            )}

            {activeModal === "education" && (
              <>
                <input type="text" placeholder="College" value={formData.college} onChange={e => handleInputChange("college", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" />
                <input type="text" placeholder="Subject" value={formData.subject} onChange={e => handleInputChange("subject", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" />
                <textarea placeholder="Description" value={formData.description} onChange={e => handleInputChange("description", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" rows={3} />
              </>
            )}

            {activeModal === "places" && (
              <input type="text" placeholder="Hometown" value={formData.hometown} onChange={e => handleInputChange("hometown", e.target.value)} className="w-full border px-3 py-2 rounded mb-2" />
            )}

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSaveOrAdd}>
              {editingItem ? "Save Changes" : "Add"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditAboutModal;
