export const SampleProfiles = [
  {
    _id: "61ae0aa00a5b5860643ea3ea",
    name: "Stuff",
    creds: [
      {
        vc: {
          "@context": "https://www.w3.org/2018/credentials/v1",
          id: "http://coodos.co/verify/vc61adece6e22adecbae28bf32",
          type: ["VerifiableCredential", "Certificate"],
          credentialSubject: {
            id: "did:iota:2JNreXPng1CB1SwZ98nHBJ5PXNM4FVucpmCphaY4Zr92",
            Amount: "320Gi",
            "Credential Issuer": "http://coodos.co",
            "Credential Type": "Diamond Hands",
            "Holding Since": "2009",
            expiresEpoch: "1954148737133",
            sign: "CLXboWRi2u68maLm6rwvRreA1fjKBLQddvJReQuhsNXEJwh6m6UJq4TeSveswsLuy5JB5JLZKVufDjHxFuiGxRHhkDxYarRR4R5xm3kX22KSDn3A3kwQHxC4tSXpRUti9q9uP9TJkD9H1ZMhCJUh1hyctDgNqMeTNt2ssEy9A2me7nr",
          },
          issuer: "did:iota:4Dt4YHSabRca8UdC9v1omnADbshBytzDyYLRyUmg4wAb",
          issuanceDate: "2021-12-06T11:05:37Z",
          proof: {
            type: "JcsEd25519Signature2020",
            verificationMethod: "#signing",
            signatureValue:
              "Ad1iH8RbmK8iqhQrA9xLknSzi1a4F9m8Y2XGhKpAc4eiwWFMhwhCVSe6KAxuib3VtufyJJtgDUradRSU6NZcRFg",
          },
        },
        excluded: [
          "id",
          "Amount",
          "Credential Issuer",
          "Credential Type",
          "Holding Since",
          "expiresEpoch",
          "sign",
        ],
        _id: "61ae0aa00a5b5860643ea3eb",
      },
      {
        vc: {
          "@context": "https://www.w3.org/2018/credentials/v1",
          id: "http://coodos.co/verify/vc61adeb7f5d97b1cb1c7fe6ff",
          type: ["VerifiableCredential", "License"],
          credentialSubject: {
            id: "did:iota:2JNreXPng1CB1SwZ98nHBJ5PXNM4FVucpmCphaY4Zr92",
            "Credential Issuer": "http://coodos.co",
            "Credential Type": "ID Verification",
            Test1: "asdf",
            Test2: "asdf",
            expiresEpoch: "316998788924381",
            sign: "Hr3r5MeW51xmiAoKnAoqyskcku6PNKkStrYBDJ1vWqGAPwZBkLnqVPSVj7xPR9Cf4YiCihmZRLNhKyZEwbA8cXB6YRQH28GKcuLfDstwr64T8vyzfFtBZHTRcLWJxgbeCL4mbaL5aVrFxdE9zbgMJ7gsFYHCWzDbudCgNhVhofrBQ5e",
          },
          issuer: "did:iota:4Dt4YHSabRca8UdC9v1omnADbshBytzDyYLRyUmg4wAb",
          issuanceDate: "2021-12-06T11:08:44Z",
          proof: {
            type: "JcsEd25519Signature2020",
            verificationMethod: "#signing",
            signatureValue:
              "49Qu1UcvDxCPij3gYbMdwtSaPbCt1FFPk1vX8kn3qExdzL2hXTErAgiEjxH2r1Jf3pjye8WZsgjQEKgJCE11NVqr",
          },
        },
        excluded: [
          "id",
          "Credential Issuer",
          "Credential Type",
          "Test1",
          "Test2",
          "expiresEpoch",
          "sign",
        ],
        _id: "61ae0aa00a5b5860643ea3ec",
      },
    ],
    __v: 0,
  },
];
