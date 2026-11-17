export const personalInfo = {
  name: "Arpit Gupta",
  title: "Software Engineer",
  location: "Bengaluru, India",
  email: "arpitgupta0761@gmail.com",
  phone: "+91-7999613841",
  linkedin: "https://www.linkedin.com/in/arpit-gupta-url/",
  github: "https://github.com/arpit4521",
  leetcode: "https://leetcode.com/u/arpitgupta0761/",
  codechef: "https://www.codechef.com/users/arpitgupta0103",
  profileImage: "/profile.jpg",
};

export const socialLinks = [
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "GitHub", href: personalInfo.github },
  { label: "LeetCode", href: personalInfo.leetcode },
  { label: "CodeChef", href: personalInfo.codechef },
];

export const navigation = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Expertise", id: "expertise" },
  { label: "Problem Solving", id: "problem-solving" },
  { label: "Contact", id: "contact" },
];

export const introduction = {
  statement: "I build software, explore complex systems, and work across the boundaries of hardware and software.",
  summary: "From semiconductor EDA to virtual hardware and storage systems, I bring a cross-domain perspective to building efficient, maintainable software.",
  about: [
    "I am a Software Engineer with a background in Electronics and Communication Engineering and professional experience across the semiconductor industry.",
    "My journey has taken me through semiconductor EDA development, protocol engineering, simulation and emulation, virtual hardware modelling, and storage systems. Working across these areas has shaped how I think about software: not in isolation, but as part of a larger system.",
    "I enjoy understanding problems at different levels of abstraction, tracing complex behaviours to their root cause, and building software that is efficient, maintainable, and reliable.",
  ],
};

export const education = {
  degree: "B.Tech. · Electronics & Communication Engineering",
  school: "Maulana Azad National Institute of Technology",
  shortName: "MANIT, Bhopal",
  period: "2021–2025",
  cgpa: "8.56 / 10",
  coreSubjects: [
    "Object-Oriented Programming",
    "Embedded Systems",
    "Digital Electronics",
    "Computer Architecture",
    "Microprocessors",
    "Computer Networks",
    "Information Theory and Computing",
  ],
};

export const experiences = [
  {
    company: "Western Digital",
    role: "Software Development Engineer",
    team: "SDApps team",
    location: "Bengaluru, India",
    period: "Oct 2025 — Nov 2026",
    summary: "Building software that makes hardware available before it exists.",
    description: "Developing HDD models and virtual hardware simulations that reproduce hardware behaviour, enabling firmware developers to work before physical hardware is available.",
    contributions: [
      "Developed a Renode-based virtual hardware platform for pre-silicon firmware development, reducing dependency on physical hardware and improving firmware validation turnaround time by 30% through early hardware-software integration.",
      "Implemented register-accurate Timer, Host, and SATA Device models, resolving hardware-behaviour gaps and reducing manual peripheral validation effort by 25% through reusable, state-machine-driven components and interrupt handling.",
      "Enhanced SATA storage simulation with FIS transaction handling, ATA command flows, and 64-bit transfer support, expanding data-path validation coverage by 35% and enabling high-transfer-length testing without physical devices.",
      "Developed gRPC-based hardware APIs, configurable error injection, and automated integration tests, reducing manual firmware-hardware debugging effort by 30% and improving reproducibility of positive and negative test scenarios.",
    ],
    metric: "30%",
    metricLabel: "improvement in firmware validation turnaround",
    technologies: ["C#", "C++", "Renode", "gRPC", "SATA", "ATA", "FIS", "Zephyr RTOS", "Hardware Modelling", "OOP", "Unit Testing", "Integration Testing"],
  },
  {
    company: "Siemens EDA",
    role: "Software Engineer",
    team: "Hardware Assisted Verification",
    location: "Noida, India",
    period: "Jul 2025 — Oct 2025",
    summary: "Shared abstractions. Less duplication. More reliable software.",
    description: "Working on semiconductor EDA software and protocol development, with an emphasis on modular design, root-cause debugging, and regression-oriented validation.",
    contributions: [
      "Unified AXI4 and AXI5 protocol development within a shared, modular codebase by redesigning top-level components, reducing code duplication by 40% and simplifying maintenance across protocol variants.",
      "Investigated protocol-IP failures with the Hardware-Assisted Verification team, performing root-cause debugging and coordinating with QA to validate fixes across positive and negative scenarios.",
      "Applied test-driven development and regression-oriented validation to improve defect detection and protect existing functionality during code refactoring.",
    ],
    metric: "40%",
    metricLabel: "reduction in code duplication",
    technologies: ["C++", "SystemC", "AXI4", "AXI5", "QuestaSim", "Veloce", "XML", "Git", "Linux", "Debugging", "Protocol Verification"],
  },
  {
    company: "Siemens EDA",
    role: "Research & Development Intern",
    team: "Hardware Assisted Verification",
    location: "Noida, India",
    period: "Jan 2025 — Jul 2025",
    summary: "Making complex protocol behaviour easier to understand.",
    description: "Developing and debugging protocol IP, building observability tools, and exploring reliable communication between different clock domains.",
    contributions: [
      "Worked on industry-standard protocols including Ethernet, TTCAN, and AXI4-Stream during protocol IP development and debugging.",
      "Reduced protocol debugging time by 40% by developing an automated protocol analyzer and GUI-based visualization tool, improving observability across the verification flow.",
      "Designed an asynchronous-FIFO-based speed adapter for clock-domain crossing, addressing reliable data transfer between different clock domains and verifying functionality through simulation and waveform analysis using QuestaSim.",
    ],
    metric: "40%",
    metricLabel: "reduction in protocol debugging time",
    technologies: ["C++", "SystemC", "AXI4-Stream", "Ethernet", "TTCAN", "CAN", "QuestaSim", "Veloce", "XML"],
  },
];

export const projects = [
  {
    id: "virtual-hardware",
    number: "01",
    title: "Virtual Embedded Hardware Platform",
    subtitle: "Two nodes. One virtual environment.",
    category: "Simulation & software modelling",
    introduction: "A Renode + Zephyr RTOS environment for running nRF52840 firmware and validating BLE communication without physical boards.",
    problem: "Execute firmware and inspect hardware-software interactions in a reproducible virtual environment.",
    approach: "Combine Zephyr firmware builds with Renode’s nRF52840 hardware model, then connect two independent nodes through a virtual wireless medium.",
    implementation: [
      "Configured and built Zephyr firmware for the nRF52840 DK target, generating ARM ELF binaries.",
      "Integrated and executed firmware binaries on Renode’s nRF52840 model.",
      "Validated CPU, memory, peripheral, and UART-level firmware execution.",
      "Simulated Central and Peripheral nodes running Zephyr BLE applications.",
      "Established BLE communication using Renode’s virtual wireless medium and validated runtime behaviour through UART output.",
    ],
    outcome: "Validated firmware execution and Central–Peripheral BLE communication in a virtual hardware environment.",
    technologies: ["C", "Zephyr RTOS", "Renode", "ARM", "BLE", "Embedded Systems", "Simulation", "Virtual Hardware"],
    diagram: "nodes",
  },
  {
    id: "ethernet-analyzer",
    number: "02",
    title: "Ethernet Protocol Analyzer",
    subtitle: "From packets to a clearer picture.",
    category: "Developer tools & observability",
    introduction: "A packet analysis and visualization tool that makes Ethernet traffic easier to inspect and protocol-level issues easier to debug.",
    problem: "Manual packet inspection slows down protocol debugging and makes communication behaviour difficult to interpret.",
    approach: "Bring packet capture, analysis, and visualization into a GUI-based debugging workflow.",
    implementation: [
      "Developed packet analysis and visualization functionality using C++, SystemC, and XML.",
      "Worked with libpcap for Ethernet packet capture and inspection.",
      "Built GUI-based workflows for analysing network traffic.",
    ],
    outcome: "Reduced manual packet inspection time by approximately 20%.",
    technologies: ["C++", "SystemC", "XML", "libpcap", "Ethernet", "GUI Development", "Protocol Analysis"],
    diagram: "packets",
  },
  {
    id: "axi-speed-adapter",
    number: "03",
    title: "AXI4-Stream Speed Adapter",
    subtitle: "Different clocks. Reliable communication.",
    category: "Concurrency & protocol engineering",
    introduction: "A speed bridge for AXI4-Stream communication across different clock and data-rate domains.",
    problem: "Transfer data reliably between AXI4-Stream interfaces operating in different clock domains.",
    approach: "Use an asynchronous FIFO with Gray-code-based read and write pointers to bridge clock-domain boundaries.",
    implementation: [
      "Worked on AXI4-Stream protocol behaviour and speed adaptation.",
      "Used asynchronous FIFO concepts for clock-domain crossing.",
      "Worked with Gray-code-based read and write pointers.",
      "Addressed communication between different data-rate domains and verified functionality through simulation.",
    ],
    outcome: "Verified speed-adapter functionality through simulation across different clock domains.",
    technologies: ["C++", "AXI4-Stream", "Asynchronous FIFO", "Clock Domain Crossing", "Gray Code"],
    diagram: "clocks",
  },
  {
    id: "ttcan",
    number: "04",
    title: "TTCAN Protocol Implementation",
    subtitle: "Communication, on a shared timeline.",
    category: "Protocol development & validation",
    introduction: "Implementation and validation of time-triggered communication functionality over CAN IP.",
    problem: "Implement and validate TTCAN behaviour on top of existing CAN protocol functionality.",
    approach: "Work at the protocol layer, focusing on time-triggered communication and debugging communication scenarios.",
    implementation: [
      "Worked on time-triggered communication and CAN protocol behaviour.",
      "Contributed to protocol-level implementation and validation.",
      "Debugged communication scenarios over CAN IP.",
    ],
    outcome: "Implemented and validated TTCAN protocol functionality over CAN IP.",
    technologies: ["C++", "CAN", "TTCAN", "Embedded Communication", "Protocol Implementation"],
    diagram: "timeline",
  },
] as const;

export const expertise = [
  {
    title: "Software Engineering",
    description: "The foundation: clear abstractions, reliable code, and thoughtful design.",
    featured: "C / C++ / C# / Python",
    skills: ["C", "Modern C++", "C#", "Python", "Object-Oriented Programming", "Object-Oriented Design", "Design Patterns", "Data Structures and Algorithms", "Software Architecture", "Memory Management", "Multithreading", "Concurrency", "Synchronization", "Inter-Process Communication", "Debugging", "Performance Optimization"],
  },
  {
    title: "Systems & Computer Science",
    description: "Understanding the mechanisms beneath the abstractions.",
    featured: "Operating systems / Architecture",
    skills: ["Operating Systems", "Computer Organization and Architecture", "System Programming", "Process and Thread Management", "Memory Hierarchy", "Synchronization Mechanisms", "IPC", "Linux", "Build Systems", "GDB"],
  },
  {
    title: "Simulation, Emulation & Modelling",
    description: "Representing complex behaviour in software that can be tested.",
    featured: "Renode / SystemC / Virtual hardware",
    skills: ["Renode", "Hardware Behavioural Modelling", "Virtual Hardware", "Register-Level Modelling", "SystemC", "Hardware-Assisted Verification", "QuestaSim", "Veloce", "Simulation and Debugging", "State Machines"],
  },
  {
    title: "Semiconductor & Electronics",
    description: "Connecting software decisions to the hardware they describe.",
    featured: "EDA / AXI / Clock domains",
    skills: ["Semiconductor EDA", "AXI4", "AXI5", "AXI4-Stream", "Clock Domain Crossing", "Asynchronous FIFO", "Gray Code", "Digital Design Concepts", "Electronics and Hardware-Software Interaction"],
  },
  {
    title: "Storage & Communication",
    description: "How data moves, how interfaces behave, and how systems connect.",
    featured: "SATA / Ethernet / CAN",
    skills: ["HDD Modelling", "SATA", "ATA Commands", "SATA FIS", "PCIe", "Ethernet", "TTCAN", "CAN", "Protocol Development", "Data Transfer and Communication Interfaces"],
  },
  {
    title: "Embedded & Firmware Interaction",
    description: "Where software models meet firmware and peripheral behaviour.",
    featured: "Zephyr / Interrupts / gRPC",
    skills: ["Embedded Systems", "Firmware Development", "Zephyr RTOS", "Interrupt Handling", "Peripheral Modelling", "gRPC", "Hardware-Firmware Integration"],
  },
  {
    title: "Tools & Engineering Practices",
    description: "The repeatable practices that turn working code into reliable software.",
    featured: "Testing / Build systems / Collaboration",
    skills: ["Git", "Gerrit", "CMake", "Make", "GCC", "Visual Studio", "VS Code", "Python Scripting", "CI/CD", "TDD", "Unit Testing", "Integration Testing", "NUnit", "Moq", "Agile / Scrum"],
  },
];

export const problemSolving = {
  stats: [
    { value: "1000+", label: "Coding problems solved", detail: "Across coding platforms" },
    { value: "1733", label: "LeetCode peak contest rating", detail: "Maximum contest rating" },
    { value: "3-star", label: "CodeChef", detail: "Competitive programming" },
  ],
};
