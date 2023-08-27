import "./Box.css"

export default function Box ({height, width, bgcolor, rmvItem}) {
  console.log(bgcolor)
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