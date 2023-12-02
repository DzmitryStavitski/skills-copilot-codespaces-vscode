function skillsMember() {
    // Get the member
    var member = this;

    // Get the skills
    var skills = member.skills;

    // Loop over the skills
    for (var i = 0; i < skills.length; i++) {
        // Get the skill
        var skill = skills[i];

        // Add the member to the skill
        skill.members.push(member);
    }
}