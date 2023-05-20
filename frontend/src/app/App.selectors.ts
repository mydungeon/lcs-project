export function getMembers(memberData: any) {
    return memberData?.MemberData?.members?.member || []
}

export function getMembersInfo(members: any) {
    const membersInfo = members.map((member: any) => member['member-info'])
    return membersInfo
}

export function getMemberName(member: any): string {
    return member?.['member-info']?.namelist || ''
}
