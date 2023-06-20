import AlabugaWhite from './components/AlabugaWhite'
import AlabugaBlack from './components/AlabugaBlack'
import NotificationAccess from "@/shared/ui/Icon/icons/components/NotificationAccess";
import NotificationPass from "@/shared/ui/Icon/icons/components/NotificationPass";
import NotificationTime from "@/shared/ui/Icon/icons/components/NotificationTime";
import NotificationVideo from "@/shared/ui/Icon/icons/components/NotificationVideo";
import RuleFile from "@/shared/ui/Icon/icons/components/RuleFile";
import RuleFolder from "@/shared/ui/Icon/icons/components/RuleFolder";
import RulePerson from "@/shared/ui/Icon/icons/components/RulePerson";
import Child from "@/shared/ui/Icon/icons/components/Child";
import Passport from "@/shared/ui/Icon/icons/components/Passport";
import PassportActive from "@/shared/ui/Icon/icons/components/PassportActive";
import Person from "@/shared/ui/Icon/icons/components/Person";
import PersonActive from "@/shared/ui/Icon/icons/components/PersonActive";
import child from "@/shared/ui/Icon/icons/components/Child";

export default {
    "alabuga-black": AlabugaBlack,
    "alabuga-white": AlabugaWhite,
    "notification-access": NotificationAccess,
    "notification-pass": NotificationPass,
    "notification-time": NotificationTime,
    "notification-video": NotificationVideo,
    "rule-file": RuleFile,
    "rule-folder": RuleFolder,
    "rule-person": RulePerson,
    "child": Child,
    "passport": Passport,
    "passport-active": PassportActive,
    "person": Person,
    "person-active": PersonActive
}

export type IconType =
    | "alabuga-white"
    | "alabuga-black"
    | "notification-access"
    | "notification-pass"
    | "notification-time"
    | "notification-video"
    | "rule-file"
    | "rule-folder"
    | "rule-person"
    | "child"
    | "passport"
    | "passport-active"
    | "person"
    | "person-active"