import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const SocietyImgUpload = () => {
  const [imagePreview, setImagePreview] = useState(
    'https://cdn.pixabay.com/photo/2025/05/23/08/54/girl-9617241_1280.png'
  )
  const [imageFile, setImageFile] = useState(null)
  const fileInputRef = useRef(null)

  // Fullscreen preview state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  // Handle image selection from file input
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image.')
      return
    }
    if (file.size > 15 * 1024 * 1024) {
      alert('File size should not exceed 15MB.')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result)
    reader.readAsDataURL(file)
    setImageFile(file)
  }

  const handleFromGallery = () => fileInputRef.current?.click()
  const openPreview = () => imagePreview && setIsPreviewOpen(true)
  const closePreview = () => setIsPreviewOpen(false)

  // ESC to close + scroll lock while open
  useEffect(() => {
    if (!isPreviewOpen) return

    const onKeyDown = (e) => e.key === 'Escape' && closePreview()
    window.addEventListener('keydown', onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // lock scroll
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isPreviewOpen])

  // The overlay rendered into a portal
  const PreviewOverlay = (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closePreview}
      aria-modal="true"
      role="dialog"
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          closePreview()
        }}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
        aria-label="Close preview"
        title="Close"
      >
        <FaTimes className="text-white" size={18} />
      </button>

      <div
        className="max-w-[95vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imagePreview}
          alt="Full preview"
          className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )

  return (
    <div>
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto">
        {/* Image box */}
        <div
          className="relative w-28 h-28 rounded-2xl border-4 border-white bg-gray-200 shadow-2xl overflow-hidden flex items-center justify-center mb-2 cursor-pointer"
          onClick={openPreview}
          role="button"
          aria-label="Open image preview"
          title="Click to preview"
        >
          <img
            src={imagePreview}
            alt="Profile"
            className="object-cover w-full h-full"
          />

          {/* Edit icon */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleFromGallery()
            }}
            className="absolute bottom-1 right-1 p-2 rounded-full bg-black/60 hover:bg-black/70 transition"
            aria-label="Change image"
            title="Change image"
          >
            <FaPencilAlt className="text-white" size={12} />
          </button>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          // Uncomment the next line for mobile camera capture by default:
          // capture="environment"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Fullscreen Preview via Portal (escapes any parent stacking/overflow) */}
      {isPreviewOpen && createPortal(PreviewOverlay, document.body)}
    </div>
  )
}

export default SocietyImgUpload
