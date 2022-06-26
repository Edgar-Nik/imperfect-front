import React from "react";
import { t } from "../../utils/translations_api";

export default function InfoList({ current }) {
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age < 1 ? 1 : age;
  }
  return (
    <div className="info-list">
      {current.specialist && <p className="info-item">{current.specialist}</p>}
      {current.date_of_birth && (
        <p className="info-item">age: {getAge(current.date_of_birth)}</p>
      )}
      {current.gender && <p className="info-item">gender: {current.gender}</p>}
      {current.higer_education && (
        <p className="info-item">higer education: yes</p>
      )}
      {current.experience_date && (
        <p className="info-item">
          experience: {getAge(current.experience_date)}
        </p>
      )}
      {current.languages?.length > 0 && (
        <p className="info-item">languages: {current.languages.join(", ")}</p>
      )}
      {current.specialized_in && current.specialized_in.length > 0 && (
        <p className="info-item">
          specialised in: {current.specialized_in["en"].join(", ")}
        </p>
      )}
      {current.specialized_in_multilang &&
        current.specialized_in_multilang["en"]?.length > 0 && (
          <p className="info-item">
            specialised in: {current.specialized_in_multilang["en"].join(", ")}
          </p>
        )}
      {current.genre && current.genre.length > 0 && (
        <p className="info-item">
          genre: {current.genre.map((item) => t.genre["en"][item]).join(", ")}
        </p>
      )}
      {current.photo && <p className="info-item">photo: yes</p>}
      {current.video && <p className="info-item">video: yes</p>}
      {current.can_work_with?.length > 0 && (
        <p className="info-item">
          can work with: {current.can_work_with.join(", ")}
        </p>
      )}
      {current.support_equipment?.length > 0 && (
        <p className="info-item">
          support equipment: {current.support_equipment.join(", ")}
        </p>
      )}
      {current.height && <p className="info-item">height: {current.height}</p>}
      {current.weight && <p className="info-item">weight: {current.weight}</p>}
      {current.breast_size && (
        <p className="info-item">breast size: {current.breast_size}</p>
      )}
      {current.waist && <p className="info-item">waist: {current.waist}</p>}
      {current.hips && <p className="info-item">hips: {current.hips}</p>}
      {current.skin_tone && (
        <p className="info-item">skin tone: {current.skin_tone}</p>
      )}
      {current.eye_color && (
        <p className="info-item">eye color: {current.eye_color}</p>
      )}
      {current.hair_color && (
        <p className="info-item">hair color: {current.hair_color}</p>
      )}
      {current.hair_length && (
        <p className="info-item">hair length: {current.hair_length}</p>
      )}
      {current.foot_size && (
        <p className="info-item">foot size: {current.foot_size}</p>
      )}
      {current.other_details?.length > 0 && (
        <p className="info-item">
          other details:{" "}
          {current.other_details
            .map((item) => t.other_details["en"][item])
            .join(", ")}
        </p>
      )}
      {current.special_skills?.length > 0 && (
        <p className="info-item">
          special skills:{" "}
          {current.special_skills
            .map((item) => t.special_skills["en"][item])
            .join(", ")}
        </p>
      )}
      {current.experience?.length > 0 && (
        <p className="info-item">
          experience in:{" "}
          {current.experience
            .map((item) => t.experience["en"][item])
            .join(", ")}
        </p>
      )}
      {current.voiceover && <p className="info-item">voiceover: yes</p>}
      {current.stunt_master && <p className="info-item">stunt master: yes</p>}
      {current.programs?.length > 0 && (
        <p className="info-item">programs: {current.programs?.en.join(", ")}</p>
      )}
      {current.softwares?.length > 0 && (
        <p className="info-item">softwares: {current.softwares.join(", ")}</p>
      )}
      {current.voice_type && (
        <p className="info-item">voice type: {current.voice_type["en"]}</p>
      )}
      {current.instrument_type && (
        <p className="info-item">
          instrument type: {current.instrument_type["en"]}
        </p>
      )}
      {current.music_style && (
        <p className="info-item">music style: {current.music_style["en"]}</p>
      )}
      {current.materials?.length > 0 && (
        <p className="info-item">
          materials:{" "}
          {current.materials.map((item) => t.materials["en"][item]).join(", ")}
        </p>
      )}
    </div>
  );
}
