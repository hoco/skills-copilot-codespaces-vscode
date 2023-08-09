function skillsMember() {
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    skill.addEventListener("click", (e) => {
      e.preventDefault();
      const skillId = e.currentTarget.dataset.skill;
      const members = document.querySelectorAll(".member");
      members.forEach((member) => {
        const memberSkills = member.dataset.skills.split(",");
        if (memberSkills.includes(skillId)) {
          member.classList.remove("d-none");
        } else {
          member.classList.add("d-none");
        }
      });
    });
  });
}