const filters = {
  filmmakers: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",
        title: "Specialist",
        values: [
          { label: "Producer", key: "producer" },
          { label: "Director", key: "director" },
          { label: "DOP", key: "dop" },
          { label: "Actor", key: "actor" },
          { label: "Script Writer", key: "script_writer" },
          { label: "Make-up Artist", key: "make_up_artist" },
          { label: "Animator", key: "animator" },
        ],
      },
      gender: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",
        title: "Gender",

        values: [
          { label: "Male", key: "male" },
          { label: "Female", key: "female" },
        ],
      },
      higher_education: {
        title: "Higher education",
        type: "SINGLE_CHECK",
        adminType: "SINGLE_CHECK",
      },
      experience_date: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",
        title: "Experience",
        adminTitle: "Experience start date",
        values: [
          {
            label: "1-10y",
            key: "1-10",
          },
          {
            label: "10-15y",
            key: "10-15",
          },
          {
            label: "15+",
            key: "15",
          },
        ],
      },
      age: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",
        title: "Age",
        adminTitle: "Date of birth",

        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
      languages: {
        type: "LANGUAGES",
        adminType: "LANGUAGES",

        title: "Languages",
      },
    },
    specialist_filters: {
      producer: {
        specialized_in: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Specialized in",

          values: [
            { label: "Music Video", key: "music_video" },
            { label: "Film Production", key: "film_production" },
            { label: "Commercial Video", key: "commercial_video" },
            { label: "Event", key: "event" },
            { label: "Concert", key: "concert" },
            { label: "Festival", key: "festival" },
            { label: "Animation", key: "animation" },
            { label: "Game", key: "game" },
            { label: "Documentary", key: "documentary" },
          ],
        },
      },
      director: {
        specialized_in: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Music Video", key: "music_video" },
            { label: "Film Production", key: "film_production" },
            { label: "Commercial Video", key: "commercial_video" },
            { label: "Animation", key: "animation" },
            { label: "TV-series", key: "tv_series" },
            { label: "TV-show", key: "tv_show" },
            { label: "Documentary", key: "documentary" },
          ],
        },
        genre: {
          type: "SINGLE_PICK",
          adminType: "SINGLE_PICK",
          title: "Genre",

          values: [
            { label: "Comedy", key: "comedy" },
            { label: "Horror", key: "horror" },
            { label: "Thriller", key: "thriller" },
            { label: "Romance", key: "romance" },
            { label: "Fantasy", key: "fantasy" },
            { label: "Drama", key: "drama" },
            { label: "Sit-com", key: "sit_com" },
            { label: "TV-series", key: "tv_series" },
            { label: "TV-show", key: "tv_show" },
          ],
        },
      },
      dop: {
        photo: {
          title: "Photo",
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
        },
        video: {
          title: "Video",
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
        },

        can_work_with: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Can work with",

          values: [
            { label: "ARRI", key: "ARRI" },
            { label: "RED", key: "RED" },
            { label: "PHANTHOM", key: "PHANTHOM" },
            { label: "DSLR", key: "DSLR" },
            { label: "SLR", key: "SLR" },
            { label: "DRONE", key: "DRONE" },
          ],
        },
        support_equipment: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Support equipment",

          values: [
            { label: "Gimbal", key: "Gimbal" },
            { label: "Easyrig", key: "Easyrig" },
            { label: "Stedicam", key: "Stedicam" },
            { label: "Dolly", key: "Dolly" },
            { label: "Rail", key: "Rail" },
            { label: "Shoulder Rig", key: "Shoulder Rig" },
          ],
        },
        specialized_in: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Photoshooting", key: "photoshooting" },
            { label: "Product shooting", key: "product_shooting" },
            { label: "Music Video", key: "music_video" },
            { label: "Film Production", key: "film_production" },
            { label: "Commercial Video", key: "commercial_video" },
            { label: "TV-series", key: "tv_series" },
            { label: "TV-show", key: "tv_show" },
            { label: "Documentary", key: "documentary" },
          ],
        },
      },

      actor: {
        age: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",

          title: "Age",
          adminTitle: "Date of birth",
          values: [
            {
              label: "0-2",
              key: "0-2",
            },
            {
              label: "2-4",
              key: "2-4",
            },
            {
              label: "4-7",
              key: "4-7",
            },
            {
              label: "7-11",
              key: "7-11",
            },

            {
              label: "11-15",
              key: "11-15",
            },
            {
              label: "16-20",
              key: "16-20",
            },
            {
              label: "20-25",
              key: "20-25",
            },
            {
              label: "25-30",
              key: "25-30",
            },
            {
              label: "30-40",
              key: "30-40",
            },
            {
              label: "40+",
              key: "40",
            },
            {
              label: "70+",
              key: "70",
            },
          ],
        },

        height: {
          type: "NUMBER_RANGE",
          adminType: "NUMBER_INPUT",

          title: "Height",

          values: [
            {
              label: "150",
              key: "1-150",
            },
            {
              label: "1.50-1.70",
              key: "150-170",
            },
            {
              label: "1.70-2",
              key: "170-200",
            },
            {
              label: "2+",
              key: "200",
            },
          ],
        },

        weight: {
          type: "NUMBER_RANGE",
          adminType: "NUMBER_INPUT",

          title: "Weight",

          values: [
            {
              label: "30kg",
              key: "1-30",
            },
            {
              label: "30-50kg",
              key: "30-50",
            },
            {
              label: "50-60kg",
              key: "50-60",
            },
            {
              label: "60-80kg",
              key: "60-80",
            },
            {
              label: "80+",
              key: "80",
            },
          ],
        },
        gender: {
          type: "SINGLE_PICK_WITH_NESTED",
          adminType: "SINGLE_PICK_WITH_NESTED",

          title: "Gender",

          values: [
            { label: "Male", key: "male" },
            { label: "Female", key: "female" },
          ],
          nesteds: {
            female: {
              breast_size: {
                title: "Breast Size",

                type: "MULTIPLE_PICK",
                adminType: "SINGLE_PICK",

                values: [
                  { label: "S", key: "S" },
                  { label: "M", key: "M" },
                  { label: "L", key: "L" },
                  { label: "XL", key: "XL" },
                  { label: "XXL", key: "XXL" },
                ],
              },
              waist: {
                title: "Waist",
                type: "NUMBER_INPUT",
                adminType: "NUMBER_INPUT",
              },
              hips: {
                title: "Hips",
                type: "NUMBER_INPUT",
                adminType: "NUMBER_INPUT",
              },
              skin_tone: {
                title: "Skin tone",
                adminType: "COLOR_CHECKBOX",
                type: "COLOR_CHECKBOX",
                values: [
                  { key: "pink", color: "#ffd6c5" },
                  { key: "pale", color: "#ffe2c9" },
                  { key: "fair", color: "#ffcba3" },
                  { key: "tan", color: "#d8905f" },
                  { key: "dark", color: "#88513a" },
                ],
              },
              eye_color: {
                title: "Eye color",
                adminType: "COLOR_CHECKBOX",
                type: "COLOR_CHECKBOX",
                values: [
                  { key: "green", color: "#449e48" },
                  { key: "brown", color: "#451800" },
                  { key: "grey", color: "#8e8e8e" },
                  { key: "blue", color: "#0da2ff" },
                  {
                    key: "dichromatic",
                    color:
                      "linear-gradient(85deg, rgba(143,137,255,1) 0%, rgba(196,104,81,1) 55%, rgba(86,233,255,1) 100%)",
                  },
                ],
              },
              hair_color: {
                title: "Hair color",
                adminType: "SINGLE_PICK",
                type: "MULTIPLE_PICK",
                values: [
                  { label: "Natural", key: "natural" },
                  { label: "Dyed", key: "dyed" },
                ],
              },
              hair_length: {
                title: "Hair length",
                adminType: "SINGLE_PICK",
                type: "MULTIPLE_PICK",
                values: [
                  { label: "Short", key: "short" },
                  { label: "Mid", key: "mid" },
                  { label: "Long", key: "long" },
                ],
              },
              foot_size: {
                title: "Foot size",
                adminType: "FOOT_SIZE_SINGLE",
                type: "FOOT_SIZE",
              },
            },
          },
        },
        other_details: {
          type: "MULTIPLE_PICK",
          title: "Other details",
          adminType: "MULTIPLE_PICK",

          values: [
            { label: "tattoos", key: "tattoos" },
            { label: "moles", key: "moles" },
            { label: "freckles", key: "freckles" },
            { label: "scars", key: "scars" },
            { label: "other", key: "other" },
          ],
        },
        special_skills: {
          type: "MULTIPLE_PICK",
          title: "Special skills",
          adminType: "MULTIPLE_PICK",

          values: [
            { label: "car driving/auto/", key: "car_driving_auto" },
            { label: "car driving/manual/", key: "car_driving_manual" },
            { label: "motorcycle", key: "motorcycle" },
            { label: "bicycle", key: "bicycle" },
            { label: "flexibility", key: "flexibility" },
            { label: "singing", key: "singing" },
            { label: "swimming", key: "swimming" },
            { label: " gun/bowl shooting", key: "gun_bowl_shooting" },
            { label: "horse riding", key: "horse_riding" },
            { label: "martial arts", key: "martial_arts" },
            { label: "sport", key: "sport" },
          ],
        },
        experience: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Experience",
          adminTitle: "Experience",

          values: [
            { label: "Theater", key: "theater" },
            { label: "Film", key: "film" },
            { label: "Music Video", key: "music_video" },
            { label: "TV-show", key: "tv_show" },
            { label: "TV-series", key: "tv_series" },
          ],
        },
        voiceover: {
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
          title: "Voiceover",
        },
        stunt_master: {
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
          title: "Stunt master",
        },
      },

      script_writer: {
        specialized_in: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Specialized in",
          values: [
            { label: "Music Video", key: "music_video" },
            { label: "Film Production", key: "film_production" },
            { label: "Commercial Video", key: "commercial_video" },
            { label: "Game", key: "game" },
            { label: "Documentary", key: "documentary" },
          ],
        },
      },
      editor: {
        specialized_in: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Specialized in",

          values: [
            { label: "Music Video", key: "music_video" },
            { label: "Film Production", key: "film_production" },
            { label: "Commercial Video", key: "commercial_video" },
            { label: "Game", key: "game" },
            { label: "Documentary", key: "documentary" },
          ],
        },
        programs: {
          type: "KEYWORD",
          adminType: "KEYWORD",
          title: "Programs",
        },
      },
      make_up_artist: {
        specialized_in_multilang: {
          type: "KEYWORD",
          adminType: "KEYWORD",
          title: "Specialized in",
          isMultilang: true,
        },
      },
      animator: {
        specialized_in_multilang: {
          type: "KEYWORD",
          adminType: "KEYWORD",
          title: "Specialized in",
          isMultilang: true,
        },
      },
    },
  },
  designers: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",
        title: "Specialist",
        values: [
          { label: "Stage Design", key: "stage_design" },
          { label: "Costume design", key: "costume_design" },
          { label: "int/ext designer", key: "int_ext_designer" },
          { label: "3D designer", key: "3d_designer" },
          { label: "Graphic designer", key: "graphic_designer" },
        ],
      },

      higher_education: {
        title: "Higher education",
        type: "SINGLE_CHECK",
        adminType: "SINGLE_CHECK",
      },
      experience_date: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",
        title: "Experience",
        adminTitle: "Experience start date",
        values: [
          {
            label: "1-10y",
            key: "1-10",
          },
          {
            label: "10-15y",
            key: "10-15",
          },
          {
            label: "15+",
            key: "15",
          },
        ],
      },
      age: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",
        title: "Age",
        adminTitle: "Date of birth",
        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
      languages: {
        type: "LANGUAGES",
        adminType: "LANGUAGES",
        title: "Languages",
      },
    },
    specialist_filters: {
      stage_design: {
        specialized_in: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Specialized in",
          values: [
            { label: "Theatre", key: "theatre" },
            { label: "Film", key: "film" },
            { label: "Commercial", key: "commercial" },
            { label: "Outdoor performance", key: "outdoor_performance" },
          ],
        },
      },
      "3d_designer": {
        softwares: {
          type: "KEYWORD",
          adminType: "KEYWORD",

          title: "Softwares knowledge",
        },
      },
      graphic_designer: {
        softwares: {
          type: "KEYWORD",
          adminType: "KEYWORD",

          title: "Softwares knowledge",
        },
      },
    },
  },
  musicians: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",

        title: "Specialist",
        values: [
          { label: "Singer", key: "singer" },
          { label: "Musician", key: "musician" },
          { label: "Music Producer", key: "music_producer" },
          { label: "sfx/foley", key: "sfx_foley" },
          { label: "Composer", key: "composer" },
        ],
      },

      higher_education: {
        title: "Higher education",
        type: "SINGLE_CHECK",
        adminType: "SINGLE_CHECK",
      },
      languages: {
        type: "LANGUAGES",
        adminType: "LANGUAGES",

        title: "Languages",
      },
      age: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",

        title: "Age",
        adminTitle: "Date of birth",

        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
    },
    specialist_filters: {
      singer: {
        voice_type: {
          type: "KEYWORD",
          adminType: "TEXT",
          title: "Voice Type",
          isMultilang: true,
        },
        age: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",

          title: "Age",
          adminTitle: "Date of birth",

          values: [
            {
              label: "0-2",
              key: "0-2",
            },
            {
              label: "2-4",
              key: "2-4",
            },
            {
              label: "4-7",
              key: "4-7",
            },
            {
              label: "7-11",
              key: "7-11",
            },

            {
              label: "11-15",
              key: "11-15",
            },
            {
              label: "16-20",
              key: "16-20",
            },
            {
              label: "20-25",
              key: "20-25",
            },
            {
              label: "25-30",
              key: "25-30",
            },
            {
              label: "30-40",
              key: "30-40",
            },
            {
              label: "40+",
              key: "40",
            },
            {
              label: "70+",
              key: "70",
            },
          ],
        },
      },
      musician: {
        age: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",

          title: "Age",
          adminTitle: "Date of birth",
          values: [
            {
              label: "0-2",
              key: "0-2",
            },
            {
              label: "2-4",
              key: "2-4",
            },
            {
              label: "4-7",
              key: "4-7",
            },
            {
              label: "7-11",
              key: "7-11",
            },

            {
              label: "11-15",
              key: "11-15",
            },
            {
              label: "16-20",
              key: "16-20",
            },
            {
              label: "20-25",
              key: "20-25",
            },
            {
              label: "25-30",
              key: "25-30",
            },
            {
              label: "30-40",
              key: "30-40",
            },
            {
              label: "40+",
              key: "40",
            },
            {
              label: "70+",
              key: "70",
            },
          ],
        },
        experience_date: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",

          title: "Experience",
          adminTitle: "Experience start date",
          values: [
            {
              label: "1-10y",
              key: "1-10",
            },
            {
              label: "10-15y",
              key: "10-15",
            },
            {
              label: "15+",
              key: "15",
            },
          ],
        },
        instrument_type: {
          type: "KEYWORD",
          adminType: "TEXT",
          isMultilang: true,
          title: "Instrument Type",
        },
      },
      music_producer: {
        experience_date: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",
          title: "Experience",
          adminTitle: "Experience start date",
          values: [
            {
              label: "1-10y",
              key: "1-10",
            },
            {
              label: "10-15y",
              key: "10-15",
            },
            {
              label: "15+",
              key: "15",
            },
          ],
        },
      },
      sfx_foley: {
        experience: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Experience in",
          values: [
            { label: "Film", key: "film" },
            { label: "TV", key: "tv" },
            { label: "Commercial", key: "commercial" },
            { label: "Theatre", key: "theatre" },
            { label: "Opera", key: "opera" },
            { label: "Other", key: "other" },
          ],
        },
      },
      composer: {
        music_style: {
          type: "KEYWORD",
          adminType: "TEXT",
          isMultilang: true,
          title: "Music style",
        },
      },
    },
  },
  fine_arts: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",

        title: "Specialist",
        values: [
          { label: "Sculptor", key: "sculptor" },
          { label: "Architect", key: "architect" },
          { label: "Writer", key: "writer" },
          { label: "Painter", key: "painter" },
        ],
      },
      languages: {
        type: "LANGUAGES",
        adminType: "LANGUAGES",

        title: "Languages",
      },
      age: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",

        title: "Age",
        adminTitle: "Date of birth",
        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
      experience_date: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",

        title: "Experience",
        adminTitle: "Experience start date",
        values: [
          {
            label: "1-10y",
            key: "1-10",
          },
          {
            label: "10-15y",
            key: "10-15",
          },
          {
            label: "15+",
            key: "15",
          },
        ],
      },
    },
    specialist_filters: {
      sculptor: {
        materials: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Materials",
          values: [
            { label: "clay", key: "clay" },
            { label: "bronze", key: "bronze" },
            { label: "metals", key: "metals" },
            { label: "stone", key: "stone" },
            { label: "other", key: "other" },
          ],
        },
      },
      painter: {
        higher_education: {
          title: "Higher education",
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
        },
      },
      writer: {
        higher_education: {
          title: "Higher education",
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
        },
      },
    },
  },
  performers: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",

        title: "Specialist",
        values: [
          { label: "Dancers", key: "dancer" },
          { label: "Choreography", key: "choreography" },
          { label: "Model", key: "model" },
        ],
      },
      age: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",

        title: "Age",
        adminTitle: "Date of birth",
        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
    },
    specialist_filters: {
      dancer: {
        gender: {
          type: "SINGLE_PICK",
          adminType: "SINGLE_PICK",

          title: "Gender",
          values: [
            { label: "Male", key: "male" },
            { label: "Female", key: "female" },
          ],
        },

        age: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",

          title: "Age",
          adminTitle: "Date of birth",
          values: [
            {
              label: "0-2",
              key: "0-2",
            },
            {
              label: "2-4",
              key: "2-4",
            },
            {
              label: "4-7",
              key: "4-7",
            },
            {
              label: "7-11",
              key: "7-11",
            },

            {
              label: "11-15",
              key: "11-15",
            },
            {
              label: "16-20",
              key: "16-20",
            },
            {
              label: "20-25",
              key: "20-25",
            },
            {
              label: "25-30",
              key: "25-30",
            },
            {
              label: "30-40",
              key: "30-40",
            },
            {
              label: "40+",
              key: "40",
            },
            {
              label: "70+",
              key: "70",
            },
          ],
        },

        height: {
          type: "NUMBER_RANGE",
          title: "Height",
          adminType: "NUMBER_INPUT",

          values: [
            {
              label: "150",
              key: "1-150",
            },
            {
              label: "1.50-1.70",
              key: "150-170",
            },
            {
              label: "1.70-2",
              key: "170-200",
            },
            {
              label: "2+",
              key: "200",
            },
          ],
        },

        weight: {
          type: "NUMBER_RANGE",
          title: "Weight",
          adminType: "NUMBER_INPUT",

          values: [
            {
              label: "30kg",
              key: "1-30",
            },
            {
              label: "30-50kg",
              key: "30-50",
            },
            {
              label: "50-60kg",
              key: "50-60",
            },
            {
              label: "60-80kg",
              key: "60-80",
            },
            {
              label: "80+",
              key: "80",
            },
          ],
        },
        hair_color: {
          title: "Hair color",

          type: "MULTIPLE_PICK",
          adminType: "SINGLE_PICK",

          values: [
            { label: "Natural", key: "natural" },
            { label: "Dyed", key: "dyed" },
          ],
        },
        hair_length: {
          title: "Hair length",
          adminType: "SINGLE_PICK",

          type: "MULTIPLE_PICK",
          values: [
            { label: "Short", key: "short" },
            { label: "Mid", key: "mid" },
            { label: "Long", key: "long" },
          ],
        },
        foot_size: {
          title: "Foot size",
          type: "FOOT_SIZE",
          adminType: "FOOT_SIZE_SINGLE",
        },
        experience: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",
          title: "Experience",
          adminTitle: "Experience",
          values: [
            { label: "opera/balet", key: "opera_balet" },
            { label: "events", key: "events" },
            { label: "dance", key: "dance" },
            { label: "group", key: "group" },
          ],
        },
      },
      choreography: {
        higher_education: {
          title: "Higher education",
          type: "SINGLE_CHECK",
          adminType: "SINGLE_CHECK",
        },
        languages: {
          type: "LANGUAGES",
          adminType: "LANGUAGES",

          title: "Languages",
        },
      },

      model: {
        age: {
          type: "DATE_RANGE",
          adminType: "DATE_PICK",

          title: "Age",
          adminTitle: "Date of birth",
          values: [
            {
              label: "0-2",
              key: "0-2",
            },
            {
              label: "2-4",
              key: "2-4",
            },
            {
              label: "4-7",
              key: "4-7",
            },
            {
              label: "7-11",
              key: "7-11",
            },

            {
              label: "11-15",
              key: "11-15",
            },
            {
              label: "16-20",
              key: "16-20",
            },
            {
              label: "20-25",
              key: "20-25",
            },
            {
              label: "25-30",
              key: "25-30",
            },
            {
              label: "30-40",
              key: "30-40",
            },
            {
              label: "40+",
              key: "40",
            },
            {
              label: "70+",
              key: "70",
            },
          ],
        },

        height: {
          type: "NUMBER_RANGE",
          adminType: "NUMBER_INPUT",

          title: "Height",

          values: [
            {
              label: "150",
              key: "1-150",
            },
            {
              label: "1.50-1.70",
              key: "150-170",
            },
            {
              label: "1.70-2",
              key: "170-200",
            },
            {
              label: "2+",
              key: "200",
            },
          ],
        },

        weight: {
          type: "NUMBER_RANGE",
          adminType: "NUMBER_INPUT",

          title: "Weight",

          values: [
            {
              label: "30kg",
              key: "1-30",
            },
            {
              label: "30-50kg",
              key: "30-50",
            },
            {
              label: "50-60kg",
              key: "50-60",
            },
            {
              label: "60-80kg",
              key: "60-80",
            },
            {
              label: "80+",
              key: "80",
            },
          ],
        },
        gender: {
          type: "SINGLE_PICK_WITH_NESTED",
          adminType: "SINGLE_PICK_WITH_NESTED",

          title: "Gender",

          values: [
            { label: "Male", key: "male" },
            { label: "Female", key: "female" },
          ],
          nesteds: {
            female: {
              breast_size: {
                title: "Breast Size",

                type: "MULTIPLE_PICK",
                adminType: "SINGLE_PICK",

                values: [
                  { label: "S", key: "S" },
                  { label: "M", key: "M" },
                  { label: "L", key: "L" },
                  { label: "XL", key: "XL" },
                  { label: "XXL", key: "XXL" },
                ],
              },
              waist: {
                title: "Waist",
                type: "NUMBER_INPUT",
                adminType: "NUMBER_INPUT",
              },
              hips: {
                title: "Hips",
                type: "NUMBER_INPUT",
                adminType: "NUMBER_INPUT",
              },
              skin_tone: {
                title: "Skin tone",
                type: "COLOR_CHECKBOX",
                adminType: "COLOR_CHECKBOX",
                values: [
                  { key: "pink", color: "#ffd6c5" },
                  { key: "pale", color: "#ffe2c9" },
                  { key: "fair", color: "#ffcba3" },
                  { key: "tan", color: "#d8905f" },
                  { key: "dark", color: "#88513a" },
                ],
              },
              eye_color: {
                title: "Eye color",

                type: "COLOR_CHECKBOX",
                adminType: "COLOR_CHECKBOX",

                values: [
                  { key: "green", color: "#449e48" },
                  { key: "brown", color: "#451800" },
                  { key: "grey", color: "#8e8e8e" },
                  { key: "blue", color: "#0da2ff" },
                  {
                    key: "dichromatic",
                    color:
                      "linear-gradient(85deg, rgba(143,137,255,1) 0%, rgba(196,104,81,1) 55%, rgba(86,233,255,1) 100%)",
                  },
                ],
              },
              hair_color: {
                title: "Hair color",
                adminType: "SINGLE_PICK",

                type: "MULTIPLE_PICK",
                values: [
                  { label: "Natural", key: "natural" },
                  { label: "Dyed", key: "dyed" },
                ],
              },
              hair_length: {
                title: "Hair length",
                adminType: "SINGLE_PICK",

                type: "MULTIPLE_PICK",
                values: [
                  { label: "Short", key: "short" },
                  { label: "Mid", key: "mid" },
                  { label: "Long", key: "long" },
                ],
              },
              foot_size: {
                title: "Foot size",
                type: "FOOT_SIZE",
                adminType: "FOOT_SIZE_SINGLE",
              },
            },
          },
        },
      },
    },
  },
  production_managers: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        adminType: "SINGLE_PICK",

        title: "Specialist",
        values: [
          { label: "Administration", key: "administration" },
          {
            label: "Technical support assistants",
            key: "technical_support_assistants",
          },
          { label: "Gaffer", key: "gaffer" },
          { label: "Focus puller", key: "focus_puller" },
          { label: "Pyrotechnician", key: "pyrotechnician" },
        ],
      },
      languages: {
        type: "LANGUAGES",
        adminType: "LANGUAGES",

        title: "Languages",
      },
      age: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",

        title: "Age",
        adminTitle: "Date of birth",
        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
      experience_date: {
        type: "DATE_RANGE",
        adminType: "DATE_PICK",

        title: "Experience",
        adminTitle: "Experience start date",
        values: [
          {
            label: "1-10y",
            key: "1-10",
          },
          {
            label: "10-15y",
            key: "10-15",
          },
          {
            label: "15+",
            key: "15",
          },
        ],
      },
      specialized_in: {
        type: "MULTIPLE_PICK",
        adminType: "MULTIPLE_PICK",

        title: "Specialized in",

        values: [
          { label: "Music Video", key: "music_video" },
          { label: "Film Production", key: "film_production" },
          { label: "Commercial Video", key: "commercial_video" },
          { label: "Event", key: "event" },
          { label: "Concert", key: "concert" },
          { label: "Festival", key: "festival" },
          { label: "Animation", key: "animation" },
          { label: "Game", key: "game" },
          { label: "Documentary", key: "documentary" },
        ],
      },
    },
    specialist_filters: {
      technical_support_assistants: {
        can_work_with: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Can work with",

          values: [
            { label: "ARRI", key: "ARRI" },
            { label: "RED", key: "RED" },
            { label: "PHANTHOM", key: "PHANTHOM" },
            { label: "DSLR", key: "DSLR" },
            { label: "SLR", key: "SLR" },
            { label: "DRONE", key: "DRONE" },
          ],
        },
        support_equipment: {
          type: "MULTIPLE_PICK",
          adminType: "MULTIPLE_PICK",

          title: "Support equipment",

          values: [
            { label: "Gimbal", key: "Gimbal" },
            { label: "Easyrig", key: "Easyrig" },
            { label: "Stedicam", key: "Stedicam" },
            { label: "Dolly", key: "Dolly" },
            { label: "Rail", key: "Rail" },
            { label: "Shoulder Rig", key: "Shoulder Rig" },
          ],
        },
      },
    },
  },
};

export default filters;
