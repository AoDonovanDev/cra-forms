import "./Box.css"

export default function Box ({height, width, bgcolor, rmvItem}) {
  return (
    <div className="group">
      <div className="Box" style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: bgcolor
      }}>
      </div>
      <button className="xbtn" onClick={rmvItem}>X</button>
    </div>
  )
}