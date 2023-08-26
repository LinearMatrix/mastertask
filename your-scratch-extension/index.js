const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class mastertask {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'mastertask',

            // name that will be displayed in the Scratch UI
            name: 'MasterTask',

            // colours to use for your extension blocks
            color1: '#404F4A',
            color2: '#4E6351',

            // icons to display
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAwfSURBVHhe7d29q2QHGcDhGff+AUHQSnAF05hAGlthI4JwE7IrKrpZ7aKgNhbaJKiwtlYqqVbxA6uQjyZgF7DQKrDBmEoLLbKFZSBpcjMy5qyJsPfu3Dtf5/zmeZr7nrvsLMws+zvv2Xtm5leuHi9mAMCkfWT4CgBMmKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMD8ytXjxTCzA6+89PIwTcej1x4bJu5niq8vbNrR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gABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4DJm83+A5dulXVYljgwAAAAAElFTkSuQmCC',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAi20lEQVR4Xu3dDYxdVZ0A8On0eyny0UKhobsMrTRxhGQFXQSERVk2JAsIQrLKrit2W4F+sVIolC+R0tpChQItRQVBRaPB8JGs6e4K4ialRukuC5XvUJMitLSASNMy7XTY84DBUtvOe/PuPe+ee39NjNree875//73zX/Ouee+29bmDwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqK7AgOqG3prIBw8e3NXd3T2kNb3X3+u5555726233npu/Wc4siawadOm4ePGjXt+7dq1Y4ouMmbMmA0vvfTSqKKP0/iSFOh56623hg8dOnRLkqNPdNDtiY7bsHMWWLp06VceffTRj+XcTemav+aaa65MoZjX4N9++23FvHRXYGECMllsQSoGtaBPXSYicM4553w/DLUz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BBT0EiRRCAQIECBAQEF3DRAgQIAAgRIIKOglSKIQCBAgQICAgu4aIECAQLEF+vp+/mKP3uiiCSjo0ah1RIAAAQIE8hNQ0POz1TIBAgQIEIgmoKBHo9YRAQIECBDIT0BBz89WywQIECBAIJqAgh6NWkcECBAgQCA/AQU9P1stEyCQvcCA7JvUIoFyCCjo5cijKAgQIECg4gIKesUvAOETIECAQDkEFPRy5FEUBAiUV8BthvLmNtPIFPRMOTVGgAABAgRaI6Cgt8ZdrwQI9E/AbLV/bs6qgICCXoEkC5EAgaQF/BKTdPriDV5Bj2etJwIEmheoYnHb1jybFqogMKgKQYqRAIFyCEyYMOGp44477tchmt43kGX1JrL+ttPoLxi76mf7v6+12dtu+3777bf2nnvuKUcCRUGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyEng/wFevA3EH8K4KAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    // name of the function where your block code lives
                    opcode: 'euler',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: 'e',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ]
                },
                {
                    // name of the function where your block code lives
                    opcode: 'pi',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: 'π',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ]
                },
                {
                    // name of the function where your block code lives
                    opcode: 'pythagoras',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: '√2',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ]
                },
                {
                    // name of the function where your block code lives
                    opcode: 'theodorus',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: '√3',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ]
                },
                {
                    // name of the function where your block code lives
                    opcode: 'boolop',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.BOOLEAN,

                    // label to display on the block
                    text: '[BOOLOPS]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        BOOLOPS: {
                            type: ArgumentType.STRING,
                            menu: 'boolops'
                        }
                    }
                },
                {
                    opcode:'isn',
                    blockType:BlockType.BOOLEAN,
                    text:'is [NUM] [ISN] number?',
                    terminal:false,
                    filter:[TargetType.SPRITE,TargetType.STAGE],
                    arguments:{
                        NUM:{
                            type:ArgumentType.NUMBER
                        },
                        ISN:{
                            type:ArgumentType.STRING,
                            menu:'isn'
                        }
                    }
                },
                {
                    // name of the function where your block code lives
                    opcode: 'pow',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: '[VALUE] ^ [VALUEBY]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        VALUE: {
                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.NUMBER
                        },
                        VALUEBY: {
                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    // name of the function where your block code lives
                    opcode: 'hypotenuse',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: 'hypotenuse of A: [A] B: [B]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        A: {
                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.NUMBER
                        },
                        B: {
                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.NUMBER
                        }
                    }
                }
            ],
            menus: {
                boolops: {
                    items: ['true','false']
                },
                isn:{
                    items:['an even','an odd', 'a prime', 'a composite', 'a palindrome', 'an armstrong', 'a perfect']
                }
            }
        };
    }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    pow ({ VALUE, VALUEBY }) {
        return Math.pow(VALUE,VALUEBY)
    }
    boolop ({BOOLOPS}) {
        if (BOOLOPS=='true'){
            return true
        }else if(BOOLOPS=='false'){
            return false
        }
    }
    hypotenuse ({A,B}){
        return Math.sqrt((A*A)+(B*B))
    }
    pythagoras () {
        return Math.sqrt(2)
    }
    isn ({NUM},{ISN}) {
        if (ISN=="an even"){
            if (NUM%2==0){
                return true
            }
        }else if (ISN=="an odd"){
            if (NUM%2!=0){
                return true
            }
        }else if(ISN=="a prime"){
            for (let i = 2; i * i <= NUM; i++){
                if (NUM % i === 0)
                return false;
            } 
            return NUM > 1;
        }else if(ISN=="a composite"){
            let count=0
            for(let i=1;i<=NUM;i++){
                if(NUM%i==0){
                    count++
                }
            }
            if(count>2){
                return true;
            }
            return false;
        }else if(ISN=="a palindrome"){
            let copy=NUM
            let rev=0
            while(copy!=0){
                rev=rev*10
                rev=rev+(copy%10)
                copy=Math.floor(copy/10)
            }
            if(NUM==rev){
                return true
            }
            return false
        }else if(ISN=="an armstrong"){
            let copy=NUM
            let digs=0
            let rem=0
            let total=0
            while(copy!=0){
                digs++
                copy=Math.floor(copy/10)
            }
            copy=NUM
            while(copy!=0){
                rem=copy%10
                total+=Math.pow(rem,digs)
                copy=Math.floor(copy/10)
            }
            if(NUM==total){
                return true
            }
            return false
        }else if(ISN=="a perfect"){
            let total=0
            for(let i=1;i<NUM;i++){
                if(NUM%i==0){
                    total+=i
                }
            }
            if (total=NUM){
                return true
            }
            return false
        }
    }
    theodorus () {
        return Math.sqrt(3)
    }
    euler () {
        return Math.E
    }
    pi () {
        return Math.PI
    }
}

module.exports = mastertask;