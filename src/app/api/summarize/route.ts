export async function POST(req: Request) {
    const { text } = await req.json();
    const response = await fetch('https://api.deepseek.com/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({ text })
    });
  
    const data = await response.json();
    return new Response(JSON.stringify({ summary: data.summary }), { status: 200 });
  }
  
  