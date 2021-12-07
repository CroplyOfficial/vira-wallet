export const VerifiableCreds = [
  {
    "@context": "https://www.w3.org/2018/credentials/v1",
    id: "http://coodos.co/verify/vcdid:iota:GwtF4sXkUd5txKi4kFyrHYV29tcK5JHoy2sgseTzkpJV",
    type: ["VerifiableCredential", "License"],
    credentialSubject: {
      id: "did:iota:GwtF4sXkUd5txKi4kFyrHYV29tcK5JHoy2sgseTzkpJV",
      "Credential Issuer": "http://coodos.co",
      "Credential Type": "Farmer's License",
      "Date of Birth": "2021-11-17",
      "Farmer's Name": "Doggers",
      "Field Area in Hectares": "69420",
      expiresEpoch: "1795167876117",
      sign: "LE98WvNRDJmGrwzD3o1QVdTGZKpdXPidUMBtzinWm7bVWxuY4qFPz8YDg5oXmKxftDvqdBxbTooEvgaxNBPWHF9GLuFV19PSpvhPdAqsNrDdzaHGTLqw148zfqg65f39VKsJ2XR1EQPbgA76QYbJAzt4qxwEpuRczNCLsQQr7JEh121",
    },
    issuer: "did:iota:6JmJ5Bh1C974ksfCgjw6Tcs7Ry6aYrCSsen5oqD83rJp",
    issuanceDate: "2021-11-21T09:44:38Z",
    proof: {
      type: "JcsEd25519Signature2020",
      verificationMethod: "#signing",
      signatureValue:
        "5QwXyPWcRKg9JfFWVeGpS8A7QNhhUUf4bP616cFWjw4yknhFXxHQXEe9YQMAj3QxYF2PCcVunXrSc4XAABwGtats",
    },
  },
  {
    "@context": "https://www.w3.org/2018/credentials/v1",
    id: "http://coodos.co/verify/vcdid:iota:7v7uwpqrUATKHjwTWYq8ewD4xncN8hNwiZ4GkVixveTN",
    type: ["VerifiableCredential", "License"],
    credentialSubject: {
      "Credential Issuer": "http://identity.tools",
      "Credential Type": "Agriculture License",
      id: "did:iota:7v7uwpqrUATKHjwTWYq8ewD4xncN8hNwiZ4GkVixveTN",
      "Date of Birth": "2021-10-05",
      Email: "merul@coodos.co",
      Name: "Merul",
      expiresEpoch: "1791656169698",
      sign: "HCbkHovTYxC8bwwBVEKUcfiFFT3tyrhbAKfHBrreV78hAtN3x3fgKafsmbwT8VxZj9Eimn2e9ptQwbCYuobWAQ6Bkja3BrQA3Zpp1uQD1DhaU2DHDpLTg1NigUhbdAXQ3gknMdpMWjsEQ9h2qB7UcaAbWpXPHf3xSy84wWzMx5XAygu",
    },
    issuer: "did:iota:HEkihUVsWUaYidyAR3iHqfxwgfQWcT51gh34QgExEhZq",
    issuanceDate: "2021-10-11T18:16:09Z",
    proof: {
      type: "JcsEd25519Signature2020",
      verificationMethod: "#signing",
      signatureValue:
        "2p5SrX3DzT3FdDGXWzKDZG6bBghoz46xRYHkbujAMmq5xW9NZUX89qLBXmce7GMSd9EoHxVi8rDnita1zayPa9H5",
    },
  },
];
