// import response from "../../../fixtures/participants.json";

// const participants = response.items;

// describe("Participant Filters", () => {
//   beforeEach(() => {
//     cy.fetch({
//       role: "admins",
//       portal: "admin",
//       page: "participants",
//     });
//   });

//   it("Default Filters", () => {
//     cy.get('[data-cy="pending-filter"]')
//       .get("div")
//       .should("have.class", "bg-hackathon-tags-yellow-bg", "text-white");
//     cy.get('[data-cy="rejected-filter"]')
//       .get("div")
//       .should("have.class", "bg-hackathon-tags-red-bg", "text-white");
//     cy.get('[data-cy="accepted-filter"]')
//       .get("div")
//       .should("have.class", "bg-hackathon-tags-green-bg", "text-white");
//   });

//   it("Click Filters", () => {
//     cy.get('[data-cy="pending-filter"]').click();
//     cy.get('[data-cy="pending-filter"]')
//       .get("div")
//       .should("have.class", "text-design-brown-300", "bg-design-brown-100");
//     cy.get('[data-cy="rejected-filter"]').click();
//     cy.get('[data-cy="rejected-filter"]')
//       .get("div")
//       .should("have.class", "text-design-brown-300", "bg-design-brown-100");
//     cy.get('[data-cy="accepted-filter"]').click();
//     cy.get('[data-cy="accepted-filter"]')
//       .get("div")
//       .should("have.class", "text-design-brown-300", "bg-design-brown-100");
//   });

//   it("Click Pending", () => {
//     cy.get('[data-cy="pending-filter"]').click();
//     participants.forEach((participant) => {
//       if (participant.status === 0)
//         cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
//     });
//   });

//   it("Click Rejected", () => {
//     cy.get('[data-cy="rejected-filter"]').click();
//     participants.forEach((participant) => {
//       if (participant.status === -1)
//         cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
//     });
//   });

//   it("Click Accepted", () => {
//     cy.get('[data-cy="accepted-filter"]').click();
//     participants.forEach((participant) => {
//       if (participant.status === 1)
//         cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
//     });
//   });

//   it("Click 2 Filters", () => {
//     cy.get('[data-cy="accepted-filter"]').click();
//     cy.get('[data-cy="pending-filter"]').click();
//     participants.forEach((participant) => {
//       if (participant.status === 1 || participant.status === 0)
//         cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
//     });
//   });
// });
