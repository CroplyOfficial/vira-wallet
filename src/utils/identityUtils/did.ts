import * as identity from "@iota/identity-wasm/web";
import { Bip39, Ed25519Seed } from "@iota/iota.js";
import bs58 from "bs58";

const createIdentity = async () => {
  await identity.init("http://localhost:3000/identity_wasm_bg.wasm");

  const mnemonic = Bip39.randomMnemonic();
  const baseSeed = Ed25519Seed.fromMnemonic(mnemonic);
  const basePair = baseSeed.keyPair();

  const pubKey = bs58.encode(basePair.publicKey);
  const prvKey = bs58.encode(basePair.privateKey);

  const keypair = identity.KeyPair.fromBase58(
    identity.KeyType.Ed25519,
    pubKey,
    prvKey
  );

  const doc = identity.Document.fromKeyPair(keypair);

  doc.sign(keypair);

  const config = identity.Config.fromNetwork(identity.Network.mainnet());
  const client = identity.Client.fromConfig(config);

  const receipt = await client.publishDocument(doc.toJSON());
  doc.messageId = receipt.messageId;

  return { mnemonic, keypair: keypair.toJSON(), doc: doc.toJSON() };
};

export { createIdentity };
