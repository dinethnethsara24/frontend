// pages/client/products.jsx
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductCards } from "../../components/productCards";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function ClientProductsPage() {
    const [appliedSort, setAppliedSort] = useState("newest");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const sortLabels = {
        newest: "Newest",
        priceLow: "Price, Low to High",
        priceHigh: "Price, High to Low",
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
        setAppliedSort(value);
        setDropdownOpen(false);
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="w-full max-w-7xl mx-auto px-6 py-8 flex-1">

                {/* Top bar */}
                <div className="flex items-center justify-end mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">Sort by:</span>

                        {/* Dropdown wrapper */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-800 hover:border-gray-500 transition-colors bg-white"
                            >
                                {sortLabels[appliedSort]}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {/* Dropdown menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-40 overflow-hidden">
                                    {Object.entries(sortLabels).map(([value, label]) => (
                                        <button
                                            key={value}
                                            onClick={() => handleSelect(value)}
                                            className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50
                                                ${appliedSort === value
                                                    ? "font-semibold text-gray-900 bg-gray-50"
                                                    : "text-gray-600"
                                                }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <ProductCards sortOption={appliedSort} />
            </main>

            <Footer />
        </div>
    );
}
