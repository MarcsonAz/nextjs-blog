export default function Hello(req, res) {
    res.status(200).json({ text: 'Hello' })
  }

export function Hello2(req, res) {
    res.status(200).json({ text: 'Hello from Api' })
  }