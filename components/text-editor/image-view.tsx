import { NodeViewProps, NodeViewWrapper } from '@tiptap/react'
import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

// You can customize these values:
const DEFAULT_WIDTH = 400  // Default image width
const MIN_WIDTH = 200      // Minimum width
const MAX_WIDTH = 800      // Maximum width

const ImageView = ({ editor, node, getPos, updateAttributes }: NodeViewProps) => {
  const [isResizing, setIsResizing] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: node.attrs.width || DEFAULT_WIDTH,
  })
  const imageRef = useRef<HTMLImageElement>(null)

  const isSelected = () => {
    const { from, to } = editor.state.selection
    const pos = getPos()
    return pos !== undefined && pos >= from && pos <= to
  }

  const handleMouseDown = (e: React.MouseEvent, handle: 'left' | 'right') => {
    e.preventDefault()
    setIsResizing(true)
    
    const startX = e.clientX
    const startWidth = typeof dimensions.width === 'number' ? dimensions.width : DEFAULT_WIDTH
    
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX
      let newWidth = startWidth
      
      if (handle === 'right') {
        newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, startWidth + deltaX))
      } else {
        newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, startWidth - deltaX))
      }
      
      setDimensions({ width: newWidth })
    }
    
    const handleMouseUp = () => {
      setIsResizing(false)
      updateAttributes({
        width: dimensions.width,
      })
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <NodeViewWrapper>
      <div className="flex justify-center my-4">
        <div 
          className={cn(
            'relative group transition-all duration-200',
            isResizing && 'select-none'
          )}
          style={{
            width: `${dimensions.width}px`,
            maxWidth: '100%'
          }}
          contentEditable={false}
        >
          <img
            ref={imageRef}
            src={node.attrs.src}
            alt={node.attrs.alt || ''}
            title={node.attrs.title || ''}
            className="w-full h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            draggable={false}
          />
          
          {/* Left resize handle */}
          {isSelected() && (
            <div
              className="absolute top-1/2 -left-3 w-6 h-20 bg-gray-600 hover:bg-gray-700 border-2 border-white rounded-full cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform -translate-y-1/2 flex items-center justify-center shadow-lg"
              onMouseDown={(e) => handleMouseDown(e, 'left')}
            >
              <div className="w-1 h-10 bg-white rounded-full"></div>
            </div>
          )}
          
          {/* Right resize handle */}
          {isSelected() && (
            <div
              className="absolute top-1/2 -right-3 w-6 h-20 bg-gray-600 hover:bg-gray-700 border-2 border-white rounded-full cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform -translate-y-1/2 flex items-center justify-center shadow-lg"
              onMouseDown={(e) => handleMouseDown(e, 'right')}
            >
              <div className="w-1 h-10 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </NodeViewWrapper>
  )
}

export { ImageView }
