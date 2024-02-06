# SResponses

Package to deal with responses from the server in Deno.

## Usage

```typescript
import { ok } from "npm:@bjorkhaug/sresponses";

function GET() {
  const headers = new Headers()
  headers.set("Content-Type", "application/json")

  const body = JSON.stringify({ message: "Hello, World!" })

  return ok(body, { headers })
}
```
