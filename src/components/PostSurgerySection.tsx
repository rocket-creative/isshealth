type Kind = 'cervical' | 'lumbar'

interface PostSurgerySectionProps {
  kind?: Kind
}

export function PostSurgerySection({ kind = 'cervical' }: PostSurgerySectionProps) {
  const incisionCopy =
    kind === 'cervical'
      ? 'The incision is usually one and a half inches long, placed horizontally in a skin fold of the neck to the left or right. The incision is closed with subcuticular sutures that dissolve and do not need to be removed. We place steri strips over the incision and then cover with a 2 by 2 inch gauze pad and adhesive. You can shower the day after surgery, but the shower should be quick. You can remove the adhesive and gauze pad on postoperative day two. Leave the steri strips on and your surgeon will remove them at your first postoperative visit.'
      : 'The incision is usually one and a half to three inches long, placed vertically in the midline of the lower back. The incision is closed with subcuticular sutures that dissolve and do not need to be removed. We place steri strips over the incision and then cover with a dressing. You can shower the day after surgery, but the shower should be quick. You can remove the dressing on postoperative day two. Leave the steri strips on and your surgeon will remove them at your first postoperative visit.'

  return (
    <>
      <h2>What to know after surgery</h2>

      <h3>Do I go home the same day?</h3>
      <p>
        Most patients who undergo a one level or two level surgery go home the same day. If patients live too far away or live
        alone, we sometimes recommend an overnight stay. Patients who undergo a three level surgery usually stay overnight and go
        home the next day.
      </p>

      <h3>Wound care</h3>
      <p>{incisionCopy}</p>

      <h3>Pain medications</h3>
      <p>
        <strong>No history of pain medications:</strong> If you have not taken pain medications in the past, you will be given a
        small dose that you take only if you need them. Try to use Tylenol or Motrin when possible. The sooner you stop taking
        narcotic pain medication, the better you will feel.
      </p>
      <p>
        <strong>History of pain medications:</strong> If you have taken pain medications before surgery, we work with your pain
        management physician to cover your surgical pain. Once you recover from the surgical pain, usually two to four weeks, your
        pain management provider takes over.
      </p>

      <h3>Driving</h3>
      <p>
        Unless you do not feel well, you can begin driving 48 hours after surgery. If your surgeon does not think you should drive,
        they will tell you before you leave the hospital.
      </p>

      <h3>Work</h3>
      <p>
        Discuss with your surgeon before surgery. Depending on your occupation, some patients return to work within days after
        surgery. If your job requires physical labor, it may be six to twelve weeks before you can return to work.
      </p>

      <h3>Bathing and showers</h3>
      <p>
        The day after surgery you can shower. Shower as quickly as possible. Do not worry if the dressing is exposed to water. We do
        not recommend baths or hot tubs for the first four weeks after surgery.
      </p>

      <h2>Activity</h2>

      <h3>Exercise</h3>
      <p>
        Walking is the only exercise recommended in the first four weeks after surgery. During your postoperative visits, discuss
        your exercise goals with your surgeon.
      </p>

      <h3>Postoperative visits</h3>
      <p>
        You will see your surgeon after surgery in seven days, one month, three months, and then one year. You should have x rays
        at each visit.
      </p>
    </>
  )
}
