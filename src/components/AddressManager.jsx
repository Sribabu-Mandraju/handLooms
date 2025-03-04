import { useState, useEffect } from "react";

const AddressManager = ({ onSelectAddress, selectedAddress }) => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [newAddress, setNewAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    const addresses = JSON.parse(
      localStorage.getItem("savedAddresses") || "[]"
    );
    setSavedAddresses(addresses);
    // Show form by default if no addresses exist
    if (addresses.length === 0) {
      setShowForm(true);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!newAddress.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (newAddress.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!newAddress.addressLine1.trim()) {
      newErrors.addressLine1 = "Address line 1 is required";
    }

    if (!newAddress.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!newAddress.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    } else if (!/^\d{6}$/.test(newAddress.postalCode)) {
      newErrors.postalCode = "Postal code must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveAddress = () => {
    if (!validateForm()) {
      return;
    }

    const updatedAddresses = [
      ...savedAddresses,
      { ...newAddress, id: Date.now() },
    ];
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
    setShowForm(false);
    setNewAddress({
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
    });
    setErrors({});
  };

  const handleDeleteAddress = (addressId) => {
    const updatedAddresses = savedAddresses.filter(
      (addr) => addr.id !== addressId
    );
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Shipping Address
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          {showForm ? "Cancel" : "Add New Address"}
        </button>
      </div>

      {showForm ? (
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={newAddress.fullName}
              onChange={(e) =>
                setNewAddress({ ...newAddress, fullName: e.target.value })
              }
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 1 *
            </label>
            <input
              type="text"
              value={newAddress.addressLine1}
              onChange={(e) =>
                setNewAddress({ ...newAddress, addressLine1: e.target.value })
              }
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.addressLine1 ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.addressLine1 && (
              <p className="mt-1 text-sm text-red-500">{errors.addressLine1}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 2
            </label>
            <input
              type="text"
              value={newAddress.addressLine2}
              onChange={(e) =>
                setNewAddress({ ...newAddress, addressLine2: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code *
              </label>
              <input
                type="text"
                value={newAddress.postalCode}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, postalCode: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.postalCode && (
                <p className="mt-1 text-sm text-red-500">{errors.postalCode}</p>
              )}
            </div>
          </div>
          <button
            onClick={handleSaveAddress}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Save Address
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {savedAddresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 rounded-lg border ${
                selectedAddress?.id === address.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    {address.fullName}
                  </p>
                  <p className="text-gray-600">{address.addressLine1}</p>
                  {address.addressLine2 && (
                    <p className="text-gray-600">{address.addressLine2}</p>
                  )}
                  <p className="text-gray-600">
                    {address.city}, {address.postalCode}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onSelectAddress(address)}
                    className={`px-3 py-1 text-sm rounded-lg ${
                      selectedAddress?.id === address.id
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 border border-blue-600"
                    }`}
                  >
                    {selectedAddress?.id === address.id ? "Selected" : "Select"}
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {savedAddresses.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              No saved addresses. Click "Add New Address" to add one.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressManager;
